SELECT*FROM Categoria;
UPDATE`Categoria`SET nombre= 'carpinteria'WHERE idCategoria=6;
INSERT INTO `mydb`.`Categoria` (`idCategoria`, `Nombre`) VALUES 
					(1, 'Jardineria'),
                    (2, 'Cocina'),
                    (3, 'Herrería'),
                    (4, 'Albañilería'),
                    (5, 'Plomería'),
                    (6, 'electricista');
INSERT INTO `mydb`.`Categoria` (`idCategoria`, `Nombre`, `Desc`) VALUES 
					(1, 'Jardinería', ''),
                    (2, 'Cocina', ''),
                    (3, 'Herrería', ''),
                    (4, 'Albañilería', ''),
                    (5, 'Plomería', ''),
                    (6, 'electricista', '');
                    
INSERT INTO `mydb`.`SubCategoria` (`idSubCategoria`, `Desc`) VALUES 
(1, 'Plantas exóticas'),
(2, 'Invernaderos'),
(3, 'Jardineras'),
(4, 'Árboles Frutales'),
(5, 'Árboles Bonsai'),
(6, 'Comida Intenacional'),
(7, 'Comida Casera'),
(8, 'Ingedientes de primera calidad'),
(9, 'Ingredientes organicos y frescos'),
(10, 'Platillos exóticos'),
(11, 'Muebles de jardín'),
(12, 'Estructuras metálicas generales'),
(13, 'Soldadura Smaw'),
(14, 'Soldadura Microalambre'),
(15, 'Cortadora de plasma'),
(16, 'Castillos y trabes'),
(17, 'Colados'),
(18, 'Muros'),
(19, 'Estructuras pequeñas'),
(20, 'Bardas'),
(21, 'Fregaderos'),
(22, 'Lavabos'),
(23, 'Tuberías tapadas'),
(24, 'Caños atascados'),
(25, 'Instalaciones sanitarias'),
(26, 'Muebles domésticos'),
(27, 'Estructurtas exteriores'),
(28, 'Cobertizos'),
(29, 'Barnices y pulidos'),
(30, 'Juguetes de madera');
SELECT*FROM SubCategoria;
INSERT INTO `mydb`. `Categoria_Subcategoria`(`idCategoria_Subcategorias`, `idCategoria`, `idSubCategoria`) VALUE
(1, 1, 4),
(2, 2, 6),
(3, 4, 18),
(4, 5, 23),
(5, 3, 12);
INSERT INTO `mydb`. `empleados_categorias`(`idempleados_categorias`, `idUsuario`, ` id_relacion`) VALUE
(1, 1, 3),
(2, 1, 5),
(3, 1, 1),
(4, 4, 1),
(5, 2, 4);
INSERT INTO `mydb`. `Ubicación`(`idUbicación`, `estado`, `municipio`, `calle`, `codigo_postal`, `numero_ext`, `numero_int`) VALUE
(1, 'Baja California', 'San José', 'cien', '54129', '45', '234'), 
(2, 'Mexico', 'Los Reyes', 'andares', '52540', '47', '24'),
(3, 'Queretaro', 'Jinetes', 'juriquilla', '62349', '89', '35'),
(4, 'Merida', 'Munal', 'anegas', '63219', '13', '46'),
(5, 'Guanajuato', 'Leon', 'Nochebuena', '72229', '56', '765');
INSERT INTO `mydb`. `Usuarios`(`idUsuarios`, `Tipo`, `descripcion_usuario`, `img_perfil`, `nombre`, `estrellas`, `email`, `telefono`, `id_ubicacion`, `contraseña`) VALUE
(1, 0, 'busco plomero', 'http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png")', 'Juan', 4, 'juan23@gmail.com', '5512345072', 2, 'hola122'),  
(2, 1, 'Soy albañil', 'http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png")', 'Pablo', 5, 'pedroalb@gmail.com', '551123450', 4, 'hola123'),  
(3, 0, 'busco Jardinero', 'http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png")', 'Jorge', 5, 'Jorgeest@gmail.com', '5534231546', 3, 'hola43'),
(4, 0, 'busco cocinero', 'http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png"))', 'Sebastian', 5, 'sebtr@gmail.com', '5534865779', 5, 'hola124'),
(5, 0, 'busco coocinero', 'http://res.cloudinary.com/dqzvtvjhu/image/upload/v1630380166/nth4ghfarcrrxszq5axy.png")', 'Jose', 5, 'enriqe78@gmail.com', '69597843', 1, 'holas125');
INSERT INTO `mydb`. `Publicaciones`(`idPublicaciones`, `nombre_trabajo`, `descripcion`, `precio final`, `Estatus_trabajo`, `id_cliente`, `id_ubicacion`, `id_trabajador`) VALUE 
(2, 'Requiero jardinero', 'Jardinero calificado para realizar trabajo de jardin', 2000, 'Por realizar', 3, 2, NULL),
(3, 'Requiero cocinero', 'Cocinero calificado para evento por privado', 4000, 'Por realizar', 4, 2, NULL),
(4, 'Requiero plomero', 'Plomero calificado para realizar destapar caño', 500, 'Por realizar', 1, 2, NULL),
(5, 'Requiero jardinero', 'Jardinero calificado para realizar poder el cesped', 700, 'Por realizar', 3, 2, NULL);
SELECT*FROM `mydb`.`Usuarios`;
INSERT INTO `mydb`. `Publicaciones`(`idPublicaciones`, `nombre_trabajo`, `descripcion`, `precio final`, `Estatus_trabajo`, `id_cliente`, `id_ubicacion`, `id_trabajador`) VALUE
(1, 'Requiero albañil', 'Albañil calificado para realizar obra en una empresa', 2000, 'Por realizar', 1, 2, 2);