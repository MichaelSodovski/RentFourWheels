using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace RentFourWheels
{
    public class CarsModel
    {
        public int Id { get; set; }
        public int TypeId { get; set; }
        [Required(ErrorMessage = "Missing property kilometrage")]
        public int Kilometrage { get; set; }
        [Required(ErrorMessage = "Missing property usability")]
        [StringLength(1, ErrorMessage = "Property usability is supposed to be 1 characters")]
        [DataType(DataType.Text, ErrorMessage = "property usability is supposed to be of type string")]
        public string Usability { get; set; }
        [Required(ErrorMessage = "Missing property availability")]
        [StringLength(1, ErrorMessage = "Property availability is supposed to be up to 1 characters")]
        [DataType(DataType.Text, ErrorMessage = "property usability is supposed to be of type string")]
        public string Availability { get; set; }
        [Required(ErrorMessage = "Missing property Vin (vehicle identification number)")]
        public int Vin { get; set; }
        public int Branch { get; set; } // branch id 
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
    }
}
