using System;
using System.Collections.Generic;

#nullable disable

namespace RentFourWheels
{
    public partial class CarsType
    {
        public CarsType()
        {
            Cars = new HashSet<Car>();
        }

        public int CarTypeId { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public decimal DailyCost { get; set; }
        public decimal DelayCost { get; set; }
        public int YearOfManufacture { get; set; }
        public string Gear { get; set; }
        public string IconFileName { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
    }
}
