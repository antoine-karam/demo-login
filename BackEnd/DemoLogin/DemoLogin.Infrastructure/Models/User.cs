using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DemoLogin.Infrastructure.Models
{
    public interface IEntity
    {
        ObjectId Id { get; set; }
    }

    public class User : IEntity
    {
        public ObjectId Id { get; set; }
        public required string Email { get; set; }
        public required string FullName { get; set; }
        public required string Position { get; set; }

        public required string Password { get; set; }
        public required string UserName { get; set; }
    }
}
