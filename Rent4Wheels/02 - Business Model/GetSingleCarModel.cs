using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentFourWheels
{
    public class GetSingleCarModel
    {
        public GetSingleCarModel(Car c)
        {
            Id = c.CarId;
            TypeId = (int)c.CarTypeId;
            Kilometrage = c.CurrentKilometrage;
            Usability = c.Usability;
            Availability = c.Availability;
            Vin = c.Vin;
            Branch = (int)c.Branch;
            ImageFileName = c.ImageFileName;
        }
        [Required(ErrorMessage = "Missing property model")]
        [MinLength(1, ErrorMessage = "Property Model is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "Property Model is suppose to be up to 50 characters long")]
        [StringLength(50, ErrorMessage = "Property Model is supposed to be up to 50 characters")]
        [DataType(DataType.Text, ErrorMessage = "property Model is supposed to be of type string")]
        public string Manufacturer { get; set; }
        [Required(ErrorMessage = "Missing property model")]
        [MinLength(1, ErrorMessage = "Property Model is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "Property Model is suppose to be up to 50 characters long")]
        [StringLength(50, ErrorMessage = "Property Model is supposed to be up to 50 characters")]
        [DataType(DataType.Text, ErrorMessage = "property Model is supposed to be of type string")]
        public string Model { get; set; }
        [Required(ErrorMessage = "Missing YearOfManufacture property")]
        [DataType(DataType.Date, ErrorMessage = "property YearOfManufacture is supposed to be of type Date")]
        public int YearOfManufacture { get; set; }
        [Required(ErrorMessage = "Missing property GearBox")]
        [StringLength(1, ErrorMessage = "GearBox property is supposed to be up to 1 characters")]
        public string GearBox { get; set; }
        [Required(ErrorMessage = "Missing branch name")]
        public string BranchName { get; set; }
        public int Id { get; set; }
        public int TypeId { get; set; }
        [Required(ErrorMessage = "Missing kilomatrage")]
        public int Kilometrage { get; set; }
        [Required(ErrorMessage = "Missing property usability")]
        [StringLength(1, ErrorMessage = "Property usability is supposed to be 1 characters")]
        [DataType(DataType.Text, ErrorMessage = "property usability is supposed to be of type string")]
        public string Usability { get; set; }
        [Required(ErrorMessage = "Missing property availability")]
        [StringLength(1, ErrorMessage = "Property availability is supposed to be up to 1 characters")]
        [DataType(DataType.Text, ErrorMessage = "property usability is supposed to be of type string")]
        public string Availability { get; set; }
        [Required(ErrorMessage = "Missing Vehicle identification number")]
        public int Vin { get; set; }
        public int Branch { get; set; } // branch id 
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
        public CarsTypeModel CarType { get; set; }
        public BranchModel BranchType { get; set; }
    }
}
