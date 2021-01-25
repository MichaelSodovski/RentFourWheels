using System;
using System.Collections.Generic;
using System.Text;

namespace RentFourWheels
{
    public class CarsCarTypesBranchModel
    {
        // Branch Properties:
        public string BranchName { get; set; }
        // Car Properties:
        public int Id { get; set; }
        public int TypeId { get; set; }
        public int Kilometrage { get; set; }
        public string Usability { get; set; }
        public string Availability { get; set; }
        public int Vin { get; set; }
        public string Branch { get; set; }
        public string Image { get; set; }

        // car type properties:
        public int CarTypeId { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public decimal DailyCost { get; set; }
        public decimal DelayCost { get; set; }
        public int YearOfManufacture { get; set; }
        public string GearBox { get; set; }
    }
}
