using DemoLogin.Domain.Entities;
using DemoLogin.Domain.Services;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DemoLogin.Services
{
    public interface IAuthService
    {
        Task<User> ValidateUserAsync(string email, string password);
        string GenerateJWTToken(User user);
    }

    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;
        public AuthService(IUserService userService)
        {
            _userService = userService;
        }
        public async Task<User> ValidateUserAsync(string email, string password)
        {
            return await _userService.AuthenticateUserAsync(email, password);
        }

        public string GenerateJWTToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("DEMO-Secret-my-login-ultra-secure-and-ultra-long-secret");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(type:ClaimTypes.NameIdentifier, value:user.Id),
            new Claim(type:ClaimTypes.Email, value:user.Email),
            new Claim(type:ClaimTypes.Role, value:user.Position)
                    // Add other claims as needed
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

}
