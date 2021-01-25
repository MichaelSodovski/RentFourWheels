using Microsoft.AspNetCore.Http;

namespace RentFourWheels
{
    public class CarsModel
    {
        public int Id { get; set; }
        public int TypeId { get; set; }
        public int Kilometrage { get; set; }
        public string Usability { get; set; }
        public string Availability { get; set; }
        public int Vin { get; set; }
        public int Branch { get; set; } // branch id 
        public IFormFile Image { get; set; }
        public string ImageFileName { get; set; }
    }
}
