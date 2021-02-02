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
    public class CarsController : ControllerBase, IDisposable
    {
        private readonly CarsLogic logic = new CarsLogic();
        [HttpGet]
        public IActionResult GetAllCars()
        {
                try
                {
                    List<GetAllCarsModel> cars = logic.GetAllCars();
                    return Ok(cars);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSingleCar(int id)
        {
            try
            {
                GetSingleCarModel car = logic.GetSingleCar(id);
                if (car == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(car);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetCarByVehicleID/{vin}")]
        public IActionResult GetCarByVin(int vin)
        {
            try
            {
                GetSingleCarModel car = logic.GetCarByVehicleID(vin);
                if (car == null)
                {
                    return NotFound($"a car with vin {vin} not found");
                }
                return Ok(car);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [Route("AddCar")]
        public IActionResult AddCar([FromForm]CarsModel carModel)
        {
                try
                {
                    CarsModel addedCar = logic.AddCar(carModel);
                    return Created("api/cars/" + addedCar.Id, addedCar);
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

        [HttpPut]
        [Route("UpdateFullCar/{id}")]
        public IActionResult UpdateFullCar(int id,[FromForm]CarsModel carModel)
        {
            try
            {
                carModel.Id = id;
                CarsModel updatedCar = logic.UpdateFullCar(carModel);
                if (updatedCar == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(updatedCar);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPatch]
        [Route("UpdatePartialCar/{id}")]
        public IActionResult UpdatePartialCar(int id, CarsModel carModel)
        {
            try
            {
                carModel.Id = id;
                CarsModel CarPartialUpdate = logic.UpdateFullCar(carModel);
                if (CarPartialUpdate == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(CarPartialUpdate);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult CarDelete(int id)
        {
                try
                {
                    logic.DeleteCar(id);
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
