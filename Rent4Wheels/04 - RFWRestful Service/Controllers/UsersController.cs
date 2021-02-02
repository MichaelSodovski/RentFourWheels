using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;

namespace RentFourWheels
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EntireWorld")]
    public class usersController : ControllerBase, IDisposable
    {
        private readonly UsersLogic logic = new UsersLogic();
        [HttpGet]
        public IActionResult GetAllUsers() {
                try
                {
                    List<UserModel> users = logic.GetAllUsers();
                    return Ok(users);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSingleUser(int id)
        {
            try
            {
                UserModel user = logic.GetSingleUser(id);
                if (user == null)
                {
                    return NotFound($"a user with id {id} not found");
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetSingleUserByIdentificationNumber/{identificationNumber}")]
        public IActionResult GetSingleUserByIdentificationNumber(string identificationNumber)
        {
            try
            {
                UserModel user = logic.GetSingleUserByIdentificationNumber(identificationNumber);
                if (user == null)
                {
                    return NotFound($"a user with id {identificationNumber} not found");
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        [HttpGet]
        [Route("images/{fileName}")]
        public IActionResult GetImage(string fileName)
        {
            try
            {
                FileStream fileStream = System.IO.File.OpenRead("Uploads/" + fileName);
                return File(fileStream, "image/jpeg");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [Route("UserAdd")]
        public IActionResult UserAdd([FromForm]UserModel user)
        {
            try
            {
                UserModel addedUser = logic.AddUser(user);
                return Created("api/users/" + addedUser.UserId, addedUser);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateFullUser/{id}")]
        public IActionResult UpdateFullUser(int id, [FromForm] UserModel UserModel)
        {
            try
            {
                UserModel.UserId = id;
                UserModel updatedUser = logic.UpdateFullUser(UserModel);
                if (updatedUser == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(updatedUser);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult UserDelete(int id)
        {
                try
                {
                    logic.DeleteUser(id);
                    return NoContent();
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
        }
        public void Dispose()
        {
            logic.Dispose();
        }
    }
}
