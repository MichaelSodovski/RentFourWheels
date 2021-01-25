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
    public class OrdersController : ControllerBase, IDisposable
    {
        private readonly OrdersLogic logic = new OrdersLogic();

        [HttpGet]
        public IActionResult GetAllOrders()
        {
                try
                {
                    List<OrdersModel> cars = logic.GetAllOrders();
                    return Ok(cars);
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
            }
        [HttpPost]
        [Route("OrderAdd")]
        public IActionResult OrderAdd(OrdersModel orderModel)
        {
            try
            {
                OrdersModel orderToAdd = logic.AddOrder(orderModel);
                return Created("api/orders/" + orderToAdd.OrderId, orderToAdd);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetSingleOrder(int id)
        {
            try
            {
                OrdersModel order = logic.GetSingleOrder(id);
                if (order == null)
                {
                    return NotFound($"an order with id {id} is not found");
                }
                return Ok(order);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateFullOrder/{id}")]
        public IActionResult UpdateFullOrder(int id, OrdersModel orderModel)
        {
            try
            {
                orderModel.OrderId = id;
                OrdersModel updatedOrder = logic.UpdateFullOrder(orderModel);
                if (updatedOrder == null)
                {
                    return NotFound($"a car with id {id} not found");
                }
                return Ok(updatedOrder);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult OrderDelete(int id)
        {
            try
            {
                logic.DeleteOrder(id);
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