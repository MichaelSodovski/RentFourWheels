using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace RentFourWheels
{
    public class CarTypeLogic : BaseLogic
    {
        public List<CarsTypeModel> GetAllCarTypes()
        {
            return DB.CarsTypes.Select(ct => new CarsTypeModel
            {
                CarTypeId = ct.CarTypeId,
                Manufacturer = ct.Manufacturer,
                Model = ct.Model,
                DailyCost = ct.DailyCost,
                DelayCost = ct.DelayCost,
                YearOfManufacture = ct.YearOfManufacture,
                GearBox = ct.Gear,
                IconFileName = ct.IconFileName,
            }).ToList();
        }

        public CarsTypeModel GetSingleCarType(int id)
        {
            return DB.CarsTypes.Where(ct => ct.CarTypeId == id).Select(ct => new CarsTypeModel
            {
                CarTypeId = ct.CarTypeId,
                Manufacturer = ct.Manufacturer,
                Model = ct.Model,
                DailyCost = ct.DailyCost,
                DelayCost = ct.DelayCost,
                YearOfManufacture = ct.YearOfManufacture,
                GearBox = ct.Gear,
                IconFileName = ct.IconFileName,
            }).SingleOrDefault();
        }

        public CarsTypeModel AddCarType(CarsTypeModel carType)
        {
            string extension = Path.GetExtension(carType.Icon.FileName);
            carType.IconFileName = Guid.NewGuid() + extension;
            carType.IconFileName = carType.IconFileName;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + carType.IconFileName))
            {
                carType.Icon.CopyTo(fileStream);
            }
            carType.Icon = null;

            CarsType carTypeToAdd = new CarsType
            {
                Manufacturer = carType.Manufacturer,
                Model = carType.Model,
                DailyCost = carType.DailyCost,
                DelayCost = carType.DelayCost,
                YearOfManufacture = carType.YearOfManufacture,
                Gear = carType.GearBox,
                IconFileName = carType.IconFileName
            };
            DB.CarsTypes.Add(carTypeToAdd);
            DB.SaveChanges();
            return carType;
        }

        public CarsTypeModel UpdateFullCarType(CarsTypeModel carTypeModel)
        {
            CarsType carType = DB.CarsTypes.SingleOrDefault(ct => ct.CarTypeId == carTypeModel.CarTypeId);
            if (carType == null)
            {
                return null;
            }
            string extension = Path.GetExtension(carTypeModel.Icon.FileName);
            carTypeModel.IconFileName = Guid.NewGuid() + extension;
            carTypeModel.IconFileName = carTypeModel.IconFileName;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + carTypeModel.IconFileName))
            {
                carTypeModel.Icon.CopyTo(fileStream);
            }
            carTypeModel.Icon = null;
            carType.Manufacturer = carTypeModel.Manufacturer;
            carType.Model = carTypeModel.Model;
            carType.DailyCost = carTypeModel.DailyCost;
            carType.DelayCost = carTypeModel.DelayCost;
            carType.YearOfManufacture = carTypeModel.YearOfManufacture;
            carType.Gear = carTypeModel.GearBox;
            carType.IconFileName = carTypeModel.IconFileName;
            DB.SaveChanges();
            return carTypeModel;
        }


        public void DeleteCarType(int id)
        {
            CarsType CarTypeToDelete = DB.CarsTypes.SingleOrDefault(ct => ct.CarTypeId == id);
            if (CarTypeToDelete == null)
            {
                return;
            }
            DB.CarsTypes.Remove(CarTypeToDelete);
            DB.SaveChanges();
        }
    }
}

