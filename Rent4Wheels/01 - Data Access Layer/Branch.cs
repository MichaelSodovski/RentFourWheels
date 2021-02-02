using System;
using System.Collections.Generic;

#nullable disable

namespace RentFourWheels
{
    public partial class Branch
    {
        public Branch()
        {
            Cars = new HashSet<Car>();
        }

        public int BranchId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string BranchName { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
    }
}
