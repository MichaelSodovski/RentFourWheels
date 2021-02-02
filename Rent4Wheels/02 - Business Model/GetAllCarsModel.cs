using Microsoft.AspNetCore.Http;

namespace RentFourWheels
{
    public class GetAllCarsModel
    {
        public GetAllCarsModel(Car c)
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

        public CarsTypeModel CarType { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public int YearOfManufacture { get; set; }
        public string GearBox { get; set; }
        public BranchModel BranchType { get; set; }
        public string BranchName { get; set; }
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
    }
}
