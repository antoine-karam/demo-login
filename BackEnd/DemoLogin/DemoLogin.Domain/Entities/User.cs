using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoLogin.Domain.Entities
{

    public class User
    {
        public required string Id { get; set; }
        public required string Email { get; set; }
        public required string FullName { get; set; }
        public required string Position { get; set; } = "Default";
    }
}
