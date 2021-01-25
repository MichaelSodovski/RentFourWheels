using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RentFourWheels
{
    public class CarsLogic : BaseLogic 
    {
        public List<GetAllCarsModel> GetAllCars()
        {
            return DB.Cars.Select(c => new GetAllCarsModel(c) {
                BranchName = c.BranchNavigation.BranchName,
                Manufacturer = c.CarType.Manufacturer,
                Model = c.CarType.Model,
                YearOfManufacture = c.CarType.YearOfManufacture,
                GearBox = c.CarType.Gear
            }).ToList();
        }
        public GetSingleCarModel GetSingleCar(int id)
        {
            return DB.Cars.Where(c => c.CarId == id).Select(c => new GetSingleCarModel(c)).SingleOrDefault();
        }
        public CarsModel AddCar(CarsModel carModel) {
            string extension = Path.GetExtension(carModel.Image.FileName);
            carModel.ImageFileName = Guid.NewGuid() + extension;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + carModel.ImageFileName)) {
                carModel.Image.CopyTo(fileStream);
            }
            carModel.Image = null;
            Car car = new Car
            {
                CarTypeId = carModel.TypeId,
                CurrentKilometrage = carModel.Kilometrage,
                Usability = carModel.Usability,
                Availability = carModel.Availability,
                Vin = carModel.Vin,
                Branch = carModel.Branch,
                ImageFileName = carModel.ImageFileName
            };
            DB.Cars.Add(car);
            DB.SaveChanges();
            return carModel;
        }
        public CarsModel UpdateFullCar(CarsModel carModel) {
            Car car = DB.Cars.SingleOrDefault(p => p.CarId == carModel.Id);
            if (car == null) {
                return null;
            }
            string extension = Path.GetExtension(carModel.Image.FileName);
            carModel.ImageFileName = Guid.NewGuid() + extension;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + carModel.ImageFileName))
            {
                carModel.Image.CopyTo(fileStream);
            }
            carModel.Image = null;

            car.CarTypeId = carModel.TypeId;
            car.CurrentKilometrage = carModel.Kilometrage;
            car.Usability = carModel.Usability;
            car.Availability = carModel.Availability;
            car.Vin = carModel.Vin;
            car.Branch = carModel.Branch;
            car.ImageFileName = carModel.ImageFileName;
            DB.SaveChanges();
            return carModel;
        }

        public CarsModel UpdatePartialCar(CarsModel carModel)
        {
            Car car = DB.Cars.SingleOrDefault(p => p.CarId == carModel.Id);
            if (car == null) {
                return null;
            }
            if(car.CarType != null)
            car.CarTypeId = carModel.TypeId;
#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
            if (car.CurrentKilometrage != null)
#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
                car.CurrentKilometrage = carModel.Kilometrage;
            if (car.Usability != null)
                car.Usability = carModel.Usability;
            if (car.Availability != null)
                car.Availability = carModel.Availability;
            if (car.Vin != null)
                car.Vin = carModel.Vin;
            if (car.Branch != null)
                car.Branch = carModel.Branch;
            DB.SaveChanges();
            return carModel;
        }
        public void DeleteCar(int id) {
            Car CarToDelete = DB.Cars.SingleOrDefault(c => c.CarId == id);
            if (CarToDelete == null) {
                return;
            }
            DB.Cars.Remove(CarToDelete);
            DB.SaveChanges();
        }
    }
}
