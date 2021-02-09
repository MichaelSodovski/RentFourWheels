using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RentFourWheels
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdentificationNumber { get; set; }
        public string UserName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string PassWord { get; set; }
        public int? RoleId { get; set; }
        public string Role { get; set; } = "user";
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
        public string JWTtoken { get; set; }
    }
}
