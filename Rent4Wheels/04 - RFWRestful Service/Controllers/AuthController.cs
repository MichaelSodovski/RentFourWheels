using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace RentFourWheels
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EntireWorld")]
    public class AuthController : ControllerBase
    {
        private readonly JwtHelper jwtHelper;
        private readonly UsersLogic logic;

        [HttpPost]
        [Route("register")]
        public IActionResult register([FromForm]UserModel user)
        {
            if (logic.isUserNameExists(user.UserName))
            {
                return BadRequest("userName is already taken...");
            }
            else logic.AddUser(user);
            user.JWTtoken = jwtHelper.GetJwtToken(user.UserName, user.Role);
            user.PassWord = null;
            return Created("api/users/" + user.UserId, user);
        }

        [HttpPost]
        [Route("login")]
        public IActionResult login(CredentialsModel credentials)
        {
            UserModel user = logic.GetUserByCredentials(credentials);
            if(user == null)
            {
                return Unauthorized("Incorrect Username or Password");
            }
            user.JWTtoken = jwtHelper.GetJwtToken(user.UserName, user.Role);
            user.PassWord = null;
            return Ok(user);
        }
    }
}
