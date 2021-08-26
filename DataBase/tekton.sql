INSERT INTO `mydb`.`Usuarios` (`idUsuarios`, `Tipo`, `Usuarioscol`) VALUES 
								(1, 1, 'Juan'),
                                (2, 1, 'Erika'),
                                (3, 1, 'Marina')
                                ;

INSERT INTO `mydb`.`Categoria` (`idCategoria`, `Nombre`, `Desc`) VALUES 
					(1, 'Jardinería', ''),
                    (2, 'Cocina', ''),
                    (3, 'Herrería', ''),
                    (4, 'Albañilería', ''),
                    (5, 'Plomería', '');

INSERT INTO `mydb`.`Categoria` (`idCategoria`, `Nombre`, `Desc`) VALUES 
					(6, 'electricista', '');
INSERT INTO `mydb`.`SubCategoria` (`idSubCategoria`, `idCategoria`, `Desc`) VALUES 
(14, 6, 'Contactos, apagadores, sockets y focos');

INSERT INTO `mydb`.`SubCategoria` (`idSubCategoria`, `idCategoria`, `Desc`) VALUES 
(1, 1, 'Plantas exóticas'),
(2, 1, 'Jardineras'),
(3, 1, 'Árboles Frutales'),
(4, 1, 'Árboles Bonsai'),
(5, 2, 'Cocina Mexicana'),
(6, 2, 'Cocina Casera'),
(7, 2, 'Tailandesa'),
(8, 2, 'China'),
(9, 3, 'Muebles de jardín'),
(10, 3, 'Estructuras metálicas generales'),
(11, 3, 'Soldadura Smaw'),
(12, 3, 'Soldadura Microalambre'),
(13, 3, 'Cortadora de plasma')
;

INSERT INTO `mydb`.`empleados_categorias` (`idempleados_categorias`, `idUsuario`, `id_realacion`) VALUES 
(1, 1, 5), 
(2, 1, 6),
(3, 1, 8),  
(4, 2, 1),  
(5, 2, 2),  
(6, 3, 9),  
(7, 3, 13)  
;
INSERT INTO `mydb`.`empleados_categorias` (`idempleados_categorias`, `idUsuario`, `id_realacion`) VALUES 
(8, 2, 7); 

INSERT INTO `mydb`.`empleados_categorias` (`idempleados_categorias`, `idUsuario`, `id_realacion`) VALUES 
(9, 3, 14); 


SELECT * FROM mydb.usuarios;
SELECT * FROM mydb.categoria;
SELECT * FROM mydb.subcategoria;
SELECT * FROM mydb.empleados_categorias;

SELECT usuarios.idUsuarios, usuarios.UsuariosCol, categoria.Nombre, subcategoria.Desc FROM mydb.usuarios 
INNER JOIN mydb.empleados_categorias
ON mydb.usuarios.idUsuarios = mydb.empleados_categorias.idUsuario
INNER JOIN mydb.subcategoria
ON mydb.subcategoria.idSubCategoria = mydb.empleados_categorias.id_realacion
INNER JOIN mydb.categoria
ON mydb.categoria.idCategoria = mydb.subcategoria.idCategoria
ORDER BY usuarios.idUsuarios