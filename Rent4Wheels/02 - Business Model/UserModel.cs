using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentFourWheels
{
    public class UserModel
    {
        public int UserId { get; set; }
        [Required(ErrorMessage = "Missing first name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Missing first name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Missing identification number")]
        [MinLength(1, ErrorMessage = "Property IdentificationNumber is suppose to be at least 1 character long")]
        [MaxLength(9, ErrorMessage = "Property IdentificationNumber is suppose to be up to 9 characters long")]
        [StringLength(50, ErrorMessage = "Property IdentificationNumber supposed to be up to 9 characters")]
        public string IdentificationNumber { get; set; }
        [Required(ErrorMessage = "Missing property user name")]
        [MinLength(1, ErrorMessage = "property userName is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "property userName is suppose to be up to 50 characters long")]
        [DataType(DataType.Text, ErrorMessage = "property userName is supposed to be of type string")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Missing property DateOfBirth")]
        [DataType(DataType.DateTime, ErrorMessage = "property DateOfBirth is supposed to be of type DateTime")]
        public DateTime? DateOfBirth { get; set; }
        [Required(ErrorMessage = "Missing gender")]
        [StringLength(1, ErrorMessage = "Property Gender is supposed to be 1 characters")]
        public string Gender { get; set; }
        [Required(ErrorMessage = "Misssing Email")]
        [EmailAddress(ErrorMessage = "Property Email is suppose to be of email format")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Missing property Password")]
        [MinLength(1, ErrorMessage = "property Password is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "property Password is suppose to be up to 50 characters long")]
        [DataType(DataType.Text, ErrorMessage = "property Password is supposed to be of type string")]
        public string PassWord { get; set; }
        public int? RoleId { get; set; }
        public string Role { get; set; } = "user";
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
        public string JWTtoken { get; set; }
    }
}
