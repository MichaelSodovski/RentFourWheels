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

        public GetSingleCarModel GetCarByVehicleID(int vin)
        {
            return DB.Cars.Where(c => c.Vin == vin).Select(c => new GetSingleCarModel(c) {
                BranchName = c.BranchNavigation.BranchName,
                Manufacturer = c.CarType.Manufacturer,
                Model = c.CarType.Model,
                YearOfManufacture = c.CarType.YearOfManufacture,
                GearBox = c.CarType.Gear
            }).SingleOrDefault();
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
            if (car == null) return null;
            if (carModel.TypeId != null) car.CarTypeId = carModel.TypeId;
            if (carModel.Kilometrage != null) car.CurrentKilometrage = carModel.Kilometrage; 
            if (carModel.Usability != null) car.Usability = carModel.Usability;
            if (carModel.Availability != null) car.Availability = carModel.Availability;
            if (carModel.Vin != null) car.Vin = carModel.Vin;
            if (carModel.Branch != null) car.Branch = carModel.Branch;
            if (carModel.ImageFileName != null && carModel.Image == null) { 
                car.ImageFileName = null;
                carModel.Image = null;
            }
            if (carModel.ImageFileName == null && carModel.Image == null) { 
                car.ImageFileName = null;
                carModel.Image = null;
            }
            if (carModel.Image != null) {
                string extension = Path.GetExtension(carModel.Image.FileName);
                carModel.ImageFileName = Guid.NewGuid() + extension;
                using (FileStream fileStream = System.IO.File.Create("Uploads/" + carModel.ImageFileName)) {
                    carModel.Image.CopyTo(fileStream);
                }
                carModel.Image = null;
                car.ImageFileName = carModel.ImageFileName;
            }
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
