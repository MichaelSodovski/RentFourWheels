using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace RentFourWheels
{
    public partial class rent4wheelsDBContext : DbContext
    {
        public rent4wheelsDBContext()
        {
        }

        public rent4wheelsDBContext(DbContextOptions<rent4wheelsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Branch> Branches { get; set; }
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<CarsType> CarsTypes { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserType> UserTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.;Database=rent4wheelsDB;Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.ToTable("Branch");

                entity.Property(e => e.BranchId)
                    .ValueGeneratedNever()
                    .HasColumnName("BranchID");

                entity.Property(e => e.BranchName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Car>(entity =>
            {
                entity.Property(e => e.CarId).HasColumnName("CarID");

                entity.Property(e => e.Availability)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.CarTypeId).HasColumnName("CarTypeID");

                entity.Property(e => e.ImageFileName).HasMaxLength(1000);

                entity.Property(e => e.Usability)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Vin).HasColumnName("VIN");

                entity.HasOne(d => d.BranchNavigation)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.Branch)
                    .HasConstraintName("FK_CarsTable_BranchTable");

                entity.HasOne(d => d.CarType)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.CarTypeId)
                    .HasConstraintName("FK_CarsTable_CarsTypeTable1");
            });

            modelBuilder.Entity<CarsType>(entity =>
            {
                entity.HasKey(e => e.CarTypeId)
                    .HasName("PK_CarsTable");

                entity.ToTable("CarsType");

                entity.Property(e => e.CarTypeId).HasColumnName("CarTypeID");

                entity.Property(e => e.DailyCost).HasColumnType("money");

                entity.Property(e => e.DelayCost).HasColumnType("money");

                entity.Property(e => e.Gear)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.IconFileName).HasMaxLength(1000);

                entity.Property(e => e.Manufacturer)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.ActualReturnDate).HasColumnType("date");

                entity.Property(e => e.CarId).HasColumnName("CarID");

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Vin).HasColumnName("VIN");

                entity.HasOne(d => d.Car)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CarId)
                    .HasConstraintName("FK_OrdersTable_CarsTable");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Orders_Users");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_UsersTable");

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("UserID");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Id)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("ID");

                entity.Property(e => e.ImageFileName).HasMaxLength(1000);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PassWord)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_UsersTable_UserTypeTable");
            });

            modelBuilder.Entity<UserType>(entity =>
            {
                entity.HasKey(e => e.RoleId)
                    .HasName("PK_UserTypeTable");

                entity.ToTable("UserType");

                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
