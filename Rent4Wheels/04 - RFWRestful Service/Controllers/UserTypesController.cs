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
    public class UserTypesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllUserTypes()
        {
            using (UserTypesLogic logic = new UserTypesLogic())
            {
                try
                {
                    List<UserType> cars = logic.GetAllUserTypes();
                    return Ok(cars);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
            }
        }
    }
}
