using System;
using System.Collections.Generic;

#nullable disable

namespace RentFourWheels
{
    public partial class UserType
    {
        public UserType()
        {
            Users = new HashSet<User>();
        }

        public int RoleId { get; set; }
        public string Role { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
