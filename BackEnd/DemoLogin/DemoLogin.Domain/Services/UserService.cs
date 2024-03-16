using DemoLogin.Domain.Entities;
//using DemoLogin.Infrastructure.Models;
using DemoLogin.Infrastructure.Repositories.Base;

namespace DemoLogin.Domain.Services
{
    public interface IUserService
    {
        Task<User> AuthenticateUserAsync(string email, string password);
    }
    public class UserService : IUserService
    {
        //private readonly IMongoRepository<DemoLogin.Infrastructure.Models.User> _mongoRepository;
        //public UserService(IMongoRepository<DemoLogin.Infrastructure.Models.User> mongoRepository)
        //{
        //    _mongoRepository = mongoRepository;
        //}
        public async Task<User> AuthenticateUserAsync(string email, string password)
        {
            //var user = await _mongoRepository.GetAsync("Email", email);
            //if (user.Email == email && user.Password == password)
            if (email == "demo@demo.com" && password == "demo")
            {
                //return new User
                //{
                //    Email = user.Email,
                //    FullName = user.FullName,
                //    Position = user.Position,
                //    Id = user.Id.ToString(),
                //};
                return new User
                {
                    Email = "demo@demo.com",
                    FullName = "demo demo",
                    Position = "admin",
                    Id = "601",
                };
            }
            else
            {
                return await Task.FromResult<User>(null);
            }
        }
    }
}
