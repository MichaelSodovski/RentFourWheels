using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RentFourWheels
{
    public class BranchLogic : BaseLogic
    {
        public List<BranchModel> GetAllBranches()
        {
            return DB.Branches.Select(b => new BranchModel
            {
                Id = b.BranchId,
                Name = b.BranchName,
                Latitude = b.Latitude,
                Longitude = b.Longitude
            }).ToList();
        }
    }
}
