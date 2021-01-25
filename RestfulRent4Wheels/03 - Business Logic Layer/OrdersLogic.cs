using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RentFourWheels
{
    public class OrdersLogic: BaseLogic
    {
        public List<OrdersModel> GetAllOrders()
        {
            return DB.Orders.Select(o => new OrdersModel
            {
                OrderId = o.OrderId,
                StartDate = o.StartDate,
                EndDate = o.EndDate,
                ActualReturnDate = o.ActualReturnDate,
                UserId = (int)o.UserId,
                Vin = o.Vin,
                CarId = o.CarId,
                firstName = o.User.FirstName,
                lastName = o.User.LastName,
                Email = o.User.Email,
            }).ToList();
        }
        public OrdersModel GetSingleOrder(int id)
        {
            return DB.Orders.Where(o => o.OrderId == id).Select(o => new OrdersModel { 
            StartDate = o.StartDate,
            EndDate = o.EndDate,
            ActualReturnDate = o.ActualReturnDate,
            UserId = (int)o.UserId,
            Vin = o.Vin,
            CarId = o.CarId
            }).SingleOrDefault();
        }
        public OrdersModel AddOrder(OrdersModel orderModel) {
            Order order = new Order
            {
                StartDate = orderModel.StartDate,
                EndDate = orderModel.EndDate,
                ActualReturnDate = orderModel.ActualReturnDate,
                UserId = orderModel.UserId,
                Vin = orderModel.Vin,
                CarId = orderModel.CarId
            };
            DB.Add(order);
            DB.SaveChanges();
            return orderModel;
        }
        public OrdersModel UpdateFullOrder(OrdersModel orderModel)
        {
            Order order = DB.Orders.SingleOrDefault(o => o.OrderId == orderModel.OrderId);
            if (order == null)
            {
                return null;
            }
            order.StartDate = orderModel.StartDate;
            order.EndDate = orderModel.EndDate;
            order.ActualReturnDate = orderModel.ActualReturnDate;
            order.UserId = (int)orderModel.UserId;
            order.Vin = orderModel.Vin;
            order.CarId = orderModel.CarId;
            DB.SaveChanges();
            return orderModel;
        }
        public void DeleteOrder(int id)
        {
            Order orderToDelete = DB.Orders.SingleOrDefault(o => o.OrderId == id);
            if (orderToDelete == null)
            {
                return;
            }
            DB.Orders.Remove(orderToDelete);
            DB.SaveChanges();
        }
    }
}
