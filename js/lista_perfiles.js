

/**
 * @todo crear funcion para calcular cuantas estrellas requiere el perfil en la card al renderizarse de acuerdo al numero de reseñas del perfil
 * @todo crear funcion para filtrar datos
 * @todo Añadir atributo lazyloading a la plantilla de cards para que no crague imagenes de golpe cuando cargue la pagina
 */
const myStorage=window.localStorage;
function obtenerLocal(){
  if(myStorage.Trabajadores===undefined||myStorage.Trabajadores===[]){
    return [];
  }
  const variables=JSON.parse(myStorage.Trabajadores);
  
  console.log(variables);
  
  
  return variables;
}
 function calculateTotalStars( clientReviews) {
  let sumStars = 0;
  
  clientReviews.forEach(function(element){
        sumStars += element.starsForJob;
 });
 return ( sumStars / clientReviews.length) ;
}


/**
 * @function funcion que contien/obtiene un objeto y lo convierte a JSON String
 * @returns un JSON String de los perfiles
 */


function strJson(){
  let perfiles =[

    {
      img: "./../images/profile_mute.png",
      name: "Lucas Rogelio Martinez",
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      

      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      
      reviews: 4,
      stars: 0,
      municipio: "Alvaro Obregon",
      estado: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Jardinería",
      subCategories: ["Plantas exóticas", "Arboles frutales", "Invernaderos", "Bonsáis", "Jardineras"]
    },
    {
      img: "./../images/profile_mute.png",
      name: "Ana Pamela Rubio",
      stars: 9,
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 5,
      municipio: "Cuahautemoc ",
      estado: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Albañilería",
      subCategories: ["Castillos y trabes", "Colados", "Muros", "Estructuras pequeñas", "Bardas"]
    },
    {
      img: "./../images/profile_mute.png",
      name: "Lanna Garay ",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 0,
      municipio: "Azcapotzalco",
      estado: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Carpintería",
      subCategories: ["Muebles domésticos" , "Estructuras exteriores", "Cobertizos", "Barnices y pulidos", "Juguetes en madera"]
    },
    {
      img: "./../images/profile_mute.png",
      name: "Jorge Antonio de la Rosa ",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 0,
      municipio: "Benito Juarez",
      estado: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Plomería",
      subCategories: ["Fregaderos",  "Lavabos", "Tuberías tapadas", "Caños atascados", "Instalaciones sanitarias"]
    },
    {
      img: "./../images/profile_mute.png",
      name: "Marco Polo Agustin",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews:0,
      municipio: "Tecamac",
      estado: "Estado de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Cocina",
      subCategories: ["Comida internacional", "Comida casera", "Ingredientes de primera calidad", "Ingredientes orgánicos y frescos", "Platillos exóticos"]
    },
    {
      img: "./../images/profile_mute.png",
      name: "Marco Polo Agustin",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      Zip:34567,
      numExt:19,
      numInt:12,
      contrasena:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],

      reviews: 0,
      municipio: "Tecamac",
      estado: "Estado de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      category: "Cocina",
      subCategories: ["Comida internacional", "Comida casera", "Ingredientes de primera calidad", "Ingredientes orgánicos y frescos", "Platillos exóticos"]
    }
      
  ];

  return JSON.stringify(perfiles);
}

/**
 * 
 * @param {array} subCategories es el arreglo lleno de subcategorias que desempeña el trabajador
 * @returns {string} retorna un elementos HTML de tipo li–lista 
 */
function subCategoryGenerator(subCategories){
  let listaSubCat ="";
  subCategories.forEach(element=>{
    listaSubCat+= `<li class="list-inline-item p-2">${element}</li>`
  })
  return listaSubCat;
}

/**
 * @function añade datos personales del trabajador a un div
 * @param {object} worker contiene toda la informacion del trabajdor
 * @returns {string} es un div 
 */
function plantilla (worker){
  const imag=URL.createObjectURL(worker.img);
    return `
    <div class="row">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <img src=${imag} alt="profile_mute" class="col-2">
          <div class="nombre col-9">
            <h4 class="card-title">${worker.name}</h4>
            <i class="bi bi-star-fill"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-fill"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-half"></i> <!-- ESTRELLA a la MITAD -->
            <i class="bi bi-star"></i> <!-- ESTRELLA VACIA -->
            <span class="p-1">(${worker.reviews} reseñas )</span>
            <i class="bi bi-pin-map-fill p-5"> <!--MAPA-->
              <span class="p-2">${worker.municipio}</span> – <span>${worker.estado}</span>
            </i>
          </div>
        </div>
        <p class="card-text">
          ${worker.description}
        </p>
        <ul class="list-inline">
          <li class="list-inline-item p-2"><strong>${worker.category}</strong></li>
          ${subCategoryGenerator(worker.subCategories)}
        </ul>
        <a href="#" class="btn btn-primary">Conoceme</a>
      </div>
    </div>
  </div>
  
  <br>
    `
}
let validacion=document.getElementById("contact-form");

function calcularEstrellasResenas(){
  JSON.parse(strJson()).forEach(element =>{
    element.stars=calculateTotalStars(element.clientReviews);
    element.reviews=element.clientReviews.length;
  });
}


/**
 * @function convierte los JSON a 
 * @returns cadena con todos las cards de los empleados
 */
function paqueteCards(){
    let cards ="";
    calcularEstrellasResenas();
    console.log("banto");
    console.log(JSON.parse( agregaLocal()));
    JSON.parse(agregaLocal()).forEach(element => {
        cards += plantilla(element);
    });
    return cards;
}

function agregaLocal(){
  console.log("bain"); 
  let arregloTrabajadores=JSON.parse( strJson());
   let localTrabajadores=obtenerLocal();
   //myStorage.setItem("Trabajadores",JSON.stringify(localTrabajadores));
   console.log(obtenerLocal());

   for(let i=0;i<localTrabajadores.length;i++){
    arregloTrabajadores.push(localTrabajadores[i]);
   }
   
   console.log("Pasado");
   console.log(arregloTrabajadores)
   return JSON.stringify(arregloTrabajadores);
}

/**
 * @function añade al div padre, todas las card ya con la informacion
 */
function renderCard(){
    let contenedor_cards = document.getElementById("contenedor_cards"); 
    //console.log(strJson());
   console.log(validacion) 
    contenedor_cards.innerHTML += paqueteCards();
}


/**
 * @function espera la carga completa de los elementos HTML y CSS para ejecutar la funcion de renderizado de cards o perfiles de trabajadores
 */

window.addEventListener("load", (event)=>{
    
    renderCard();

});
