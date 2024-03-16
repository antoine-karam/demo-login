using DemoLogin.Services;
using Microsoft.AspNetCore.Mvc;

namespace DemoLogin.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        var user = await _authService.ValidateUserAsync(model.Email, model.Password);

        if (user == null)
            return Unauthorized();

        var tokenString = _authService.GenerateJWTToken(user);
        return Ok(new { Token = tokenString, User = user });
    }
}

