CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `tipo` bit(1) NOT NULL,
  `descripcionusuario` varchar(500) NOT NULL,
  `imgperfil` varchar(150) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `categoria` varchar(80) NOT NULL,
  `subcategoria` varchar(80) NOT NULL,
  `estrellas` tinyint NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `idubicacion` int NOT NULL,
  `pwd` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuarios`)
  
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,_binary '\0','busco plomero','http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png\")','Juan',4,'juan23@gmail.com','5512345072',2,'hola122'),(2,_binary '','Soy albañil','http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png\")','Pablo',5,'pedroalb@gmail.com','551123450',4,'hola123'),(3,_binary '\0','busco Jardinero','http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png\")','Jorge',5,'Jorgeest@gmail.com','5534231546',3,'hola43'),(4,_binary '\0','busco cocinero','http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png\"))','Sebastian',5,'sebtr@gmail.com','5534865779',5,'hola124'),(5,_binary '\0','busco coocinero','http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png\")','Jose',5,'enriqe78@gmail.com','69597843',1,'holas125');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-01 22:11:28