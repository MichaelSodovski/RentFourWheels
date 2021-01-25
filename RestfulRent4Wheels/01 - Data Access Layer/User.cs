using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace RentFourWheels
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public string UserName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string PassWord { get; set; }
        public int? RoleId { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }

        public virtual UserType Role { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

        public User ToList()
        {
            throw new NotImplementedException();
        }
    }
}
