using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RentFourWheels
{
    public class UsersLogic : BaseLogic
    {
        public List<UserModel> GetAllUsers()
        {
            return DB.Users.Select(u => new UserModel {
            UserId = u.UserId,
            FirstName = u.FirstName,
            LastName = u.LastName,
            IdentificationNumber = u.Id,
            UserName = u.UserName,
            DateOfBirth = u.DateOfBirth,
            Gender = u.Gender,
            Email = u.Email,
            PassWord = u.PassWord,
            RoleId = u.RoleId,
            ImageFileName = u.ImageFileName,
            Image = u.Image,
            Role = u.Role.Role
            }).ToList();
        }
        public UserModel GetSingleUser(int id)
        {
            return DB.Users.Where(u => u.UserId == id).Select(u => new UserModel {
                UserId = u.UserId,
                FirstName = u.FirstName,
                LastName = u.LastName,
                IdentificationNumber = u.Id,
                UserName = u.UserName,
                DateOfBirth = u.DateOfBirth,
                Gender = u.Gender,
                Email = u.Email,
                PassWord = u.PassWord,
                RoleId = u.RoleId,
                ImageFileName = u.ImageFileName,
                Image = u.Image
            }).SingleOrDefault();
        }

        public UserModel GetSingleUserByIdentificationNumber(string identificationNumber)
        {
            return DB.Users.Where(u => u.Id == identificationNumber).Select(u => new UserModel
            {
                UserId = u.UserId,
                FirstName = u.FirstName,
                LastName = u.LastName,
                IdentificationNumber = u.Id,
                UserName = u.UserName,
                DateOfBirth = u.DateOfBirth,
                Gender = u.Gender,
                Email = u.Email,
                PassWord = u.PassWord,
                RoleId = u.RoleId,
                ImageFileName = u.ImageFileName,
                Image = u.Image
            }).SingleOrDefault();
        }

        public UserModel AddUser(UserModel userModel) {
            string extension = Path.GetExtension(userModel.Image.FileName);
            userModel.ImageFileName = Guid.NewGuid() + extension;
            userModel.ImageFileName = userModel.ImageFileName;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + userModel.ImageFileName)) {
                userModel.Image.CopyTo(fileStream); 
            }
            userModel.Image = null;
            Random random = new System.Random();
            int userid = random.Next();

            User userToAdd = new User
            {
                UserId = userid,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName,
                Id = userModel.IdentificationNumber,
                UserName = userModel.UserName,
                DateOfBirth = userModel.DateOfBirth,
                Gender = userModel.Gender,
                Email = userModel.Email,
                PassWord = userModel.PassWord,
                RoleId = userModel.RoleId,
                ImageFileName = userModel.ImageFileName
            };
            DB.Users.Add(userToAdd);
            DB.SaveChanges();
            userModel.UserId = userToAdd.UserId;
            return userModel; 
        }
        public UserModel UpdateFullUser(UserModel userModel)
        {
            User user = DB.Users.SingleOrDefault(u => u.UserId == userModel.UserId);
            if (user == null)
            {
                return null;
            }
            string extension = Path.GetExtension(userModel.Image.FileName);
            userModel.ImageFileName = Guid.NewGuid() + extension;
            userModel.ImageFileName = userModel.ImageFileName;
            using (FileStream fileStream = System.IO.File.Create("Uploads/" + userModel.ImageFileName))
            {
                userModel.Image.CopyTo(fileStream);
            }
            userModel.Image = null;
            user.FirstName = userModel.FirstName;
            user.LastName = userModel.LastName;
            user.Id = userModel.IdentificationNumber;
            user.UserName = userModel.UserName;
            user.DateOfBirth = userModel.DateOfBirth;
            user.Gender = userModel.Gender;
            user.Email = userModel.Email;
            user.PassWord = userModel.PassWord;
            user.RoleId = userModel.RoleId;
            user.ImageFileName = userModel.ImageFileName;
            user.UserId = userModel.UserId;
            DB.SaveChanges();
            return userModel;
        }
        public void DeleteUser(int id)
        {
            User userToDelete = DB.Users.SingleOrDefault(u => u.UserId == id);
            if (userToDelete == null)
            {
                return;
            }
            DB.Users.Remove(userToDelete);
            DB.SaveChanges();
        }
    }
}
