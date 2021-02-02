using System;
using System.Collections.Generic;
using System.Text;

namespace RentFourWheels
{
    public class OrdersModel
    {
        public int OrderId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime? ActualReturnDate { get; set; }
        public int UserId { get; set; }
        public int Vin { get; set; }
        public int? CarId { get; set; }
        public CarsModel Car { get; set; }
        public string avatar { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Email { get; set; }
        public UserModel User { get; set; }
    }
}
