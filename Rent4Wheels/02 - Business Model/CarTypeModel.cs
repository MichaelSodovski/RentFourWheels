using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentFourWheels
{
    public class CarsTypeModel
    {
        public int CarTypeId { get; set; }
        [Required(ErrorMessage = "Property Manufacturer is missing")]
        [MinLength(1, ErrorMessage = "Property Manufacturer is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "Property Manufacturer is suppose to be up to 50 characters long")]
        [StringLength(50, ErrorMessage = "Property Manufacturer supposed to be up to 50 characters")]
        [DataType(DataType.Text, ErrorMessage = "Property Manufacturer is supposed to be of type string")]
        public string Manufacturer { get; set; }
        [Required(ErrorMessage = "Missing property model")]
        [MinLength(1, ErrorMessage = "Property Model is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "Property Model is suppose to be up to 50 characters long")]
        [StringLength(50, ErrorMessage = "Property Model is supposed to be up to 50 characters")]
        [DataType(DataType.Text, ErrorMessage = "property Model is supposed to be of type string")]
        public string Model { get; set; }
        [Required(ErrorMessage = "Missing daily cost property")]
        [DataType(DataType.Currency, ErrorMessage = "property DailyCost is supposed to be of type currency")]
        public decimal DailyCost { get; set; }
        [Required(ErrorMessage = "Missing delay cost property")]
        [DataType(DataType.Currency, ErrorMessage = "property DelayCost is supposed to be of type currency")]
        public decimal DelayCost { get; set; }
        [Required(ErrorMessage = "Missing YearOfManufacture property")]
        [DataType(DataType.Date, ErrorMessage = "property YearOfManufacture is supposed to be of type Date")]
        public int YearOfManufacture { get; set; }
        [Required(ErrorMessage = "Missing property GearBox")]
        [StringLength(1, ErrorMessage = "GearBox property is supposed to be up to 1 characters")]
        public string GearBox { get; set; }
        [NotMapped]
        public IFormFile Icon { get; set; }
        public string IconFileName { get; set; }
    }
}
