using System;
using System.ComponentModel.DataAnnotations;

namespace RentFourWheels
{
    public class OrdersModel
    {
        public int OrderId { get; set; }
        [Required(ErrorMessage = "Missing Start date")]
        [DataType(DataType.DateTime, ErrorMessage = "property StartDate is supposed to be of type DateTime")]
        public DateTime StartDate { get; set; } 
        [Required(ErrorMessage = "Missing end date")]
        [DataType(DataType.DateTime, ErrorMessage = "property EndDate is supposed to be of type DateTime")]
        public DateTime EndDate { get; set; }
        [Required(ErrorMessage = "Missing property ActualReturnDate")]
        [DataType(DataType.DateTime, ErrorMessage = "property ActualReturnDate is supposed to be of type DateTime")]
        public DateTime? ActualReturnDate { get; set; }
        public int UserId { get; set; }
        [Required(ErrorMessage = "Missing Vehicle identification number")]
        public int Vin { get; set; }
        public int? CarId { get; set; }
        public CarsModel Car { get; set; }
        public UserModel User { get; set; }
        public string avatar { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Email { get; set; }
    }
}
