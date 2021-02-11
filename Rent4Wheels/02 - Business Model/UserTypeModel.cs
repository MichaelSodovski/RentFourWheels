using System.ComponentModel.DataAnnotations;

namespace RentFourWheels
{
    public class UserTypeModel
    {
        public int RoleId { get; set; }
        [Required(ErrorMessage = "Missing role")]
        public string Role { get; set; }
    }
}
