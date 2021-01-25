using Microsoft.AspNetCore.Http;
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

        public int Id { get; set; }
        public int TypeId { get; set; }
        public int Kilometrage { get; set; }
        public string Usability { get; set; }
        public string Availability { get; set; }
        public int Vin { get; set; }
        public int Branch { get; set; } // branch id 
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
        public CarsTypeModel CarType { get; set; }
        public BranchModel BranchType { get; set; }
    }
}
