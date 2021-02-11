using System.ComponentModel.DataAnnotations;

namespace RentFourWheels
{
    public class CredentialsModel
    {
        [Required(ErrorMessage = "Missing property user name")]
        [MinLength(1, ErrorMessage = "property userName is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "property userName is suppose to be up to 50 characters long")]
        [DataType(DataType.Text, ErrorMessage = "property userName is supposed to be of type string")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Missing property Password")]
        [MinLength(1, ErrorMessage = "property Password is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "property Password is suppose to be up to 50 characters long")]
        [DataType(DataType.Text, ErrorMessage = "property Password is supposed to be of type string")]
        public string PassWord { get; set; }
    }
}
