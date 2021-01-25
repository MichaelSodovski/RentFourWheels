using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentFourWheels
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EntireWorld")]
    public class BranchController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllBranches()
        {
            using (BranchLogic logic = new BranchLogic())
            {
                try
                {
                    List<BranchModel> branch = logic.GetAllBranches();
                    return Ok(branch);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
            }
        }
    }
}
