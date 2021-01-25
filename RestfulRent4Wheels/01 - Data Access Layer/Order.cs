using System;
using System.Collections.Generic;

#nullable disable

namespace RentFourWheels
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime ActualReturnDate { get; set; }
        public int? UserId { get; set; }
        public int Vin { get; set; }
        public int? CarId { get; set; }
        public virtual Car Car { get; set; }
        public virtual User User { get; set; }
    }
}
