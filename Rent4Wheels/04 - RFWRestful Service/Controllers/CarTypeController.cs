using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.IO;

namespace RentFourWheels
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EntireWorld")]
    public class CarTypeController : ControllerBase, IDisposable
    {
        private readonly CarTypeLogic logic = new CarTypeLogic();

        [HttpGet]
        public IActionResult GetAllCarTypes()
        {
            try
            {
                List<CarsTypeModel> carType = logic.GetAllCarTypes();
                return Ok(carType);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSingleCarType(int id)
        {
            try
            {
                CarsTypeModel carTypeToGet = logic.GetSingleCarType(id);
                if (carTypeToGet == null)
                {
                    return NotFound($"a car type with id {id} not found");
                }
                return Ok(carTypeToGet);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [Route("CarTypeAdd")]
        public IActionResult CarTypeAdd([FromForm]CarsTypeModel carType)
        {
            try {
                CarsTypeModel addedCarType = logic.AddCarType(carType);
                return Created("api/carTypes/" + addedCarType.CarTypeId, addedCarType);
            }
            catch (Exception ex) {
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

        [HttpPut]
        [Route("UpdateFullCarType/{id}")]
        public IActionResult UpdateFullCarType(int id, [FromForm] CarsTypeModel carTypeModel)
        {
            try
            {
                carTypeModel.CarTypeId = id;
                CarsTypeModel updatedCarType = logic.UpdateFullCarType(carTypeModel);
                if (updatedCarType == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(updatedCarType);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPatch]
        [Route("UpdatePartialCarType/{id}")]
        public IActionResult UpdatePartialCarType(int id, [FromForm] CarsTypeModel carTypeModel)
        {
            try
            {
                carTypeModel.CarTypeId = id;
                CarsTypeModel CarTypePartialUpdate = logic.UpdatePartialCarType(carTypeModel);
                if (CarTypePartialUpdate == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(CarTypePartialUpdate);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult CarTypeDelete(int id)
        {
            try
            {
                logic.DeleteCarType(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        public void Dispose() {
            logic.Dispose();
        }
    }
}

