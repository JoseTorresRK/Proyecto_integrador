

/**
 * @todo crear funcion para calcular cuantas estrellas requiere el perfil en la card al renderizarse de acuerdo al numero de reseñas del perfil
 * @todo crear funcion para filtrar datos
 * @todo Añadir atributo lazyloading a la plantilla de cards para que no crague imagenes de golpe cuando cargue la pagina
 */
const myStorage=window.localStorage;
function obtenerLocal(){
  if(myStorage.Trabajador===undefined||myStorage.Trabajador===[]){
    return [];
  }
  const variables=JSON.parse(myStorage.Trabajador);
  
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
      idUser:1000,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Lucas Rogelio Martinez",
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
      password:"Ban234JH",
      

      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      
      reviews: 4,
      stars: 0,
      municipal_delegation: "Alvaro Obregon",
      state: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: ["Jardinería"],
      subcategories: ["Plantas exóticas", "Arboles frutales", "Invernaderos", "Bonsáis", "Jardineras"]
    },
    {
      idUser:1002,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Ana Pamela Rubio",
      stars: 9,
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
      password:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 5,
      municipal_delegation: "Cuahautemoc ",
      state: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: "Albañilería",
      subcategories: ["Castillos y trabes", "Colados", "Muros", "Estructuras pequeñas", "Bardas"]
    },
    {
      idUser:1003,
      isEmployee: true,
      profileImg: "./../images/profile_mute.png",
      name: "Lanna Garay ",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
      password:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 0,
      municipal_delegation: "Azcapotzalco",
      state: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: "Carpintería",
      subcategories: ["Muebles domésticos" , "Estructuras exteriores", "Cobertizos", "Barnices y pulidos", "Juguetes en madera"]
    },
    {
      idUser:1004,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Jorge Antonio de la Rosa ",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
      password:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 0,
      municipal_delegation: "Benito Juarez",
      state: "Ciudad de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: "Plomería",
      subcategories: ["Fregaderos",  "Lavabos", "Tuberías tapadas", "Caños atascados", "Instalaciones sanitarias"]
    },
    {
      idUser:1005,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Marco Polo Agustin",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
    password:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews:0,
      municipal_delegation: "Tecamac",
      state: "Estado de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: "Cocina",
      subcategories: ["Comida internacional", "Comida casera", "Ingredientes de primera calidad", "Ingredientes orgánicos y frescos", "Platillos exóticos"]
    },
    {
      idUser:1006,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Marco Polo Agustin",
      stars: 0,
      email: "Shawn@gmail.com",
      stret: "Roma",
      zip:34567,
      numExt:19,
      numInt:12,
      password:"Ban234JH",
      
      clientReviews: [
        { clientName: "Angel", starsForJob: 4, comment: "Lorem ipsum"},
        { clientName: "Ana Flores", starsForJob: 5, comment: "Lorem ipsum"}],

      reviews: 0,
      municipal_delegation: "Tecamac",
      state: "Estado de México",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum architecto veritatis repellat facere qui dolorum harum odit, nesciunt in consequatur debitis veniam, exercitationem tempora, accusamus et sed! Nesciunt, voluptate?",
      categories: "Cocina",
      subcategories: ["Comida internacional", "Comida casera", "Ingredientes de primera calidad", "Ingredientes orgánicos y frescos", "Platillos exóticos"]
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
  //const imag=URL.createObjectURL(worker.img);
  console.log(worker);
    return `
    <div class="row">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <img src="./../images/profile_mute.png" alt="profile_mute" class="col-2">
          <div class="nombre col-9">
            <h4 class="card-title">${worker.name}</h4>
            <i class="bi bi-star-fill"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-fill"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-half"></i> <!-- ESTRELLA a la MITAD -->
            <i class="bi bi-star"></i> <!-- ESTRELLA VACIA -->
            <span class="p-1">(${worker.reviews} reseñas )</span>
            <i class="bi bi-pin-map-fill p-5"> <!--MAPA-->
              <span class="p-2">${worker.municipal_delegation}</span> – <span>${worker.state}</span>
            </i>
          </div>
        </div>
        <p class="card-text">
          ${worker.description}
        </p>
        <ul class="list-inline">
          <li class="list-inline-item p-2"><strong>${worker.categories}</strong></li>
          ${subCategoryGenerator(worker.subcategories)}
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
