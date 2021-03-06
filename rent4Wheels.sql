USE [master]
GO
/****** Object:  Database [rent4wheelsDB]    Script Date: 2/11/2021 5:32:35 PM ******/
CREATE DATABASE [rent4wheelsDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'rent4wheelsDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\rent4wheelsDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'rent4wheelsDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\rent4wheelsDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [rent4wheelsDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [rent4wheelsDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [rent4wheelsDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [rent4wheelsDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [rent4wheelsDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [rent4wheelsDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [rent4wheelsDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [rent4wheelsDB] SET  MULTI_USER 
GO
ALTER DATABASE [rent4wheelsDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [rent4wheelsDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [rent4wheelsDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [rent4wheelsDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [rent4wheelsDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [rent4wheelsDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [rent4wheelsDB] SET QUERY_STORE = OFF
GO
USE [rent4wheelsDB]
GO
/****** Object:  Table [dbo].[Branch]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Branch](
	[BranchID] [int] NOT NULL,
	[Latitude] [float] NOT NULL,
	[Longitude] [float] NOT NULL,
	[BranchName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_BranchTable] PRIMARY KEY CLUSTERED 
(
	[BranchID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cars]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cars](
	[CarID] [int] IDENTITY(1,1) NOT NULL,
	[CarTypeID] [int] NULL,
	[CurrentKilometrage] [int] NOT NULL,
	[Usability] [char](1) NOT NULL,
	[Availability] [char](1) NOT NULL,
	[VIN] [int] NOT NULL,
	[Branch] [int] NULL,
	[ImageFileName] [nvarchar](1000) NULL,
 CONSTRAINT [PK_CarsTable_1] PRIMARY KEY CLUSTERED 
(
	[CarID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarsType]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarsType](
	[CarTypeID] [int] IDENTITY(1,1) NOT NULL,
	[Manufacturer] [nvarchar](50) NOT NULL,
	[Model] [nvarchar](50) NOT NULL,
	[DailyCost] [money] NOT NULL,
	[DelayCost] [money] NOT NULL,
	[YearOfManufacture] [int] NOT NULL,
	[Gear] [char](1) NOT NULL,
	[IconFileName] [nvarchar](1000) NULL,
 CONSTRAINT [PK_CarsTable] PRIMARY KEY CLUSTERED 
(
	[CarTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[ActualReturnDate] [date] NULL,
	[UserID] [int] NULL,
	[VIN] [int] NOT NULL,
	[CarID] [int] NULL,
 CONSTRAINT [PK_OrdersTable] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[ID] [nvarchar](50) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[DateOfBirth] [date] NULL,
	[Gender] [char](1) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[PassWord] [nvarchar](50) NOT NULL,
	[RoleID] [int] NULL,
	[ImageFileName] [nvarchar](1000) NULL,
 CONSTRAINT [PK_UsersTable] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 2/11/2021 5:32:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[Role] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_UserTypeTable] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Branch] ([BranchID], [Latitude], [Longitude], [BranchName]) VALUES (2, 31.7969, 34.65319, N'Ashdod')
INSERT [dbo].[Branch] ([BranchID], [Latitude], [Longitude], [BranchName]) VALUES (3, 31.77717, 35.222382, N'Jerusalem')
INSERT [dbo].[Branch] ([BranchID], [Latitude], [Longitude], [BranchName]) VALUES (4, 32.06212, 34.78465, N'Tel-Aviv')
GO
SET IDENTITY_INSERT [dbo].[Cars] ON 

INSERT [dbo].[Cars] ([CarID], [CarTypeID], [CurrentKilometrage], [Usability], [Availability], [VIN], [Branch], [ImageFileName]) VALUES (11, 3, 100001, N'n', N'y', 1212111, 3, N'5a5da344-a588-4401-966a-f68500554ce3.jpeg')
INSERT [dbo].[Cars] ([CarID], [CarTypeID], [CurrentKilometrage], [Usability], [Availability], [VIN], [Branch], [ImageFileName]) VALUES (34, 1009, 50000, N'y', N'n', 1234562, 3, N'5cc803a0-1772-4d4d-8c88-dbeed28f0306.jpg')
INSERT [dbo].[Cars] ([CarID], [CarTypeID], [CurrentKilometrage], [Usability], [Availability], [VIN], [Branch], [ImageFileName]) VALUES (1023, 1009, 200000, N'y', N'n', 1220772, 3, N'c4a2e77c-e6ca-43bb-bfb6-6f0978a501e0.jpg')
SET IDENTITY_INSERT [dbo].[Cars] OFF
GO
SET IDENTITY_INSERT [dbo].[CarsType] ON 

INSERT [dbo].[CarsType] ([CarTypeID], [Manufacturer], [Model], [DailyCost], [DelayCost], [YearOfManufacture], [Gear], [IconFileName]) VALUES (3, N'Honda', N'Civic', 600.0000, 90.0000, 2007, N'a', N'd25c736d-87d1-493f-a15b-dd33063089fb.jpg')
INSERT [dbo].[CarsType] ([CarTypeID], [Manufacturer], [Model], [DailyCost], [DelayCost], [YearOfManufacture], [Gear], [IconFileName]) VALUES (1009, N'Hyundai', N'Tucson', 1000.0000, 200.0000, 2020, N'm', N'fc69d008-d699-47f9-8adf-e73e1f4c2152.png')
INSERT [dbo].[CarsType] ([CarTypeID], [Manufacturer], [Model], [DailyCost], [DelayCost], [YearOfManufacture], [Gear], [IconFileName]) VALUES (1010, N'Ford', N'Focus', 600.0000, 200.0000, 2020, N'm', N'8d9ff672-0f22-4c95-8ae9-989b3c8a2bee.png')
INSERT [dbo].[CarsType] ([CarTypeID], [Manufacturer], [Model], [DailyCost], [DelayCost], [YearOfManufacture], [Gear], [IconFileName]) VALUES (1011, N'Hyundai', N'Sonata', 700.0000, 250.0000, 2020, N'A', N'8ccd37fc-b001-4fc6-88a8-80c43adfe9f9.png')
SET IDENTITY_INSERT [dbo].[CarsType] OFF
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2044, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-10' AS Date), CAST(N'2021-02-10' AS Date), 1032, 1212112, 11)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2045, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-10' AS Date), CAST(N'2021-02-10' AS Date), 1032, 1234562, 34)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2046, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-10' AS Date), CAST(N'2021-02-10' AS Date), 1032, 1234562, 34)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2047, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-10' AS Date), CAST(N'2021-02-10' AS Date), 1547348610, 1234562, 34)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2048, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-03' AS Date), CAST(N'2021-02-03' AS Date), 1547348610, 1234562, 11)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2049, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-01' AS Date), CAST(N'2021-02-01' AS Date), 1547348610, 1234562, 34)
INSERT [dbo].[Orders] ([OrderID], [StartDate], [EndDate], [ActualReturnDate], [UserID], [VIN], [CarID]) VALUES (2050, CAST(N'2021-02-01' AS Date), CAST(N'2021-02-01' AS Date), CAST(N'2021-02-01' AS Date), 1032, 1234562, 34)
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
INSERT [dbo].[Users] ([UserID], [FirstName], [LastName], [ID], [UserName], [DateOfBirth], [Gender], [Email], [PassWord], [RoleID], [ImageFileName]) VALUES (1032, N'Michael', N'Sodovski', N'317024628', N'MichaelAdmin', CAST(N'1990-03-03' AS Date), N'm', N'michaelsod90@gmail.com', N'111111111', 1, N'be949cff-057e-47ad-8cb0-f68717188426.jpg')
INSERT [dbo].[Users] ([UserID], [FirstName], [LastName], [ID], [UserName], [DateOfBirth], [Gender], [Email], [PassWord], [RoleID], [ImageFileName]) VALUES (1547348610, N'Michael', N'svanidze', N'317036789', N'MichaelUser', CAST(N'1990-03-03' AS Date), N'm', N'michael.sva@hotmail.com', N'222222222', 3, N'584018b6-66ed-405e-824e-4ffed4ca0721.jpg')
INSERT [dbo].[Users] ([UserID], [FirstName], [LastName], [ID], [UserName], [DateOfBirth], [Gender], [Email], [PassWord], [RoleID], [ImageFileName]) VALUES (1773476923, N'Michael', N'Sodovski', N'317024578', N'MichaelAgent', CAST(N'1990-03-03' AS Date), N'm', N'michaelsod90@gmail.com', N'333333333', 2, N'84b385d0-36c5-4f22-a520-4b8ecec40c8c.jpg')
GO
SET IDENTITY_INSERT [dbo].[UserType] ON 

INSERT [dbo].[UserType] ([RoleID], [Role]) VALUES (1, N'Admin')
INSERT [dbo].[UserType] ([RoleID], [Role]) VALUES (2, N'Agent')
INSERT [dbo].[UserType] ([RoleID], [Role]) VALUES (3, N'User')
SET IDENTITY_INSERT [dbo].[UserType] OFF
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK_CarsTable_BranchTable] FOREIGN KEY([Branch])
REFERENCES [dbo].[Branch] ([BranchID])
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK_CarsTable_BranchTable]
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK_CarsTable_CarsTypeTable1] FOREIGN KEY([CarTypeID])
REFERENCES [dbo].[CarsType] ([CarTypeID])
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK_CarsTable_CarsTypeTable1]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Users]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_OrdersTable_CarsTable] FOREIGN KEY([CarID])
REFERENCES [dbo].[Cars] ([CarID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_OrdersTable_CarsTable]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_UsersTable_UserTypeTable] FOREIGN KEY([RoleID])
REFERENCES [dbo].[UserType] ([RoleID])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_UsersTable_UserTypeTable]
GO
USE [master]
GO
ALTER DATABASE [rent4wheelsDB] SET  READ_WRITE 
GO
