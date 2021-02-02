using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RentFourWheels
{
    public class CarsTypeModel
    {
        public int CarTypeId { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public decimal DailyCost { get; set; }
        public decimal DelayCost { get; set; }
        public int YearOfManufacture { get; set; }
        public string GearBox { get; set; }
        [NotMapped]
        public IFormFile Icon { get; set; }
        public string IconFileName { get; set; }
    }
}
