using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RentFourWheels
{
    public class UserTypesLogic : BaseLogic
    {
        public List<UserType> GetAllUserTypes()
        {
            return DB.UserTypes.ToList();
        }
    }
}
