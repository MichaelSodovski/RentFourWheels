using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace RentFourWheels
{
    public partial class Car
    {
        public Car()
        {
            Orders = new HashSet<Order>();
        }

        public int CarId { get; set; }
        public int? CarTypeId { get; set; }
        public int CurrentKilometrage { get; set; }
        public string Usability { get; set; }
        public string Availability { get; set; }
        public int Vin { get; set; }
        public int? Branch { get; set; }
        public string ImageFileName { get; set; }
        public virtual Branch BranchNavigation { get; set; }
        public virtual CarsType CarType { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
