using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RentFourWheels
{
    public class BranchModel
    {
        public string id;

        public int Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        [Required(ErrorMessage = "Missing Name (branch name) property")]
        [MinLength(1, ErrorMessage = "property Name (branch name) is suppose to be at least 1 character long")]
        [MaxLength(50, ErrorMessage = "property Name (branch name) is suppose to be up to 50 characters long")]
        [DataType(DataType.Text, ErrorMessage = "property Name (branch name) is supposed to be of type string")]
        [StringLength(50, ErrorMessage = "property Name (branch name) supposed to be up to 50 characters")]
        public string Name { get; set; }
    }
}
