-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuarios` (
  `idUsuarios` INT NOT NULL,
  `Tipo` BIT NULL,
  `Usuarioscol` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categoria` (
  `idCategoria` INT NOT NULL,
  `Nombre` VARCHAR(45) NULL,
  `Desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`SubCategoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SubCategoria` (
  `idSubCategoria` INT NOT NULL AUTO_INCREMENT,
  `idCategoria` INT NULL,
  `Desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idSubCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categoria_Subcategoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categoria_Subcategoria` (
  `idCategoria_SubCategorias` INT NOT NULL,
  `idCategoria` INT NULL,
  `idSubcategoria` INT NULL,
  `Desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategoria_SubCategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`empleados_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`empleados_categorias` (
  `idempleados_categorias` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `id_realacion` INT NOT NULL,
  PRIMARY KEY (`idempleados_categorias`, `idUsuario`, `id_realacion`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
