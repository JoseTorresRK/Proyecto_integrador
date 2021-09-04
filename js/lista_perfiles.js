

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
  if(clientReviews.length===0){
    return sumStars=false;
  }
  clientReviews.forEach(function(element){
        sumStars += element.starsForJob;
 });
 return ( sumStars / clientReviews.length) ;
}


/**
 * @function strJson que contien/obtiene un objeto y lo convierte a JSON String
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
      description: "Asistí a la escuela de oficios y el modelado de la madera siempre fue como un lienzo para en donde plasmar mi creativdad, disfruto realizar proyectos sencillos así como aquellos que requieren mayor atención al detalle, mis habilidades me permiten desde hacer puertas hasta modelar juguetes artisticos, no dudes en contactarme",
      categories: "Carpintería",
      subcategories: ["Muebles domésticos" , "Estructuras exteriores", "Cobertizos", "Barnices y pulidos", "Juguetes en madera"]
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
        { clientName: "Lana Garay", starsForJob: 5, comment: "Lorem ipsum"}],
      reviews: 5,
      municipal_delegation: "Cuahautemoc ",
      state: "Ciudad de México",
      description: "Con gran creatividad y acabados impecables, podemos construir algo juntos, me especializó en muros y estructuras pequeñas, aunque puedo trabajar cualquier proyecto que usted tenga en mente.",
      categories: "Albañilería",
      subcategories: ["Castillos y trabes", "Colados", "Muros", "Estructuras pequeñas", "Bardas"]
    },
    {
      idUser:1003,
      isEmployee: true,
      profileImg: "./../images/profile_mute.png",
      name: "Benito Acosta",
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
      description: "Mis 20 años de experiencia junto a mi padre me han enseñado muchas experiencias en este oficio, ofrezco a su disposicion muebles domésticos, barnices y pulido de cualquier acabado, tambien puedo realizar cobertizos a su medida, he trabajado realizando estructuras para exterior como cabañas o establos para caballos.",
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
      reviews: 20,
      municipal_delegation: "Benito Juarez",
      state: "Ciudad de México",
      description: "¿Necesita un plomero confiable, que arregle sus fugas entre semana o fines de semana? <br>Pongase en contacto conmigo para agendar una cita para la reparación e instalación del hogar u oficina",
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
      reviews: 4,
      municipal_delegation: "Tecamac",
      state: "Estado de México",
      description: "La profesión de cocinero es un trabajo duro, pero increíblemente gratificante. Es muy difícil ejercerla sin una pasión que la alimente diariamente. En mi caso, fue mi pasión la que moldeó mi profesión y no a la inversa. Siempre quise ser cocinero y eso me encaminó hacia una formación profesional acorde con ese deseo y, consecuentemente, hacia mi carrera profesional.",
      categories: "Cocina",
      subcategories: ["Comida internacional", "Comida casera", "Ingredientes de primera calidad", "Ingredientes orgánicos y frescos", "Platillos exóticos"]
    },
    {
      idUser:1006,
      isEmployee:true,
      profileImg: "./../images/profile_mute.png",
      name: "Citlali Amanda Sanchez",
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

      reviews: 8,
      municipal_delegation: "Tecamac",
      state: "Estado de México",
      description: "Tengo 7 años de experiencia realizando muebles y estructuras metálicas para hoteles y restaurantes, me distinguen la capacidad de trabajar de manera eficaz, soy atento con los clientes y buena persona, cotice conmigo los muebles o estructuras que usted requiera",
      categories: "Herreria",
      subcategories: ["Muebles de Jardín", "Estructuras metálicas", "Soldadura smaw", "Soldadura con microalambre", "Cortadora de plasma"]
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
  //console.log(worker);
    return `
    <div class="row">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <img src="${worker.img_perfil}" alt="profile_mute" class="col-2" style="width: 250;height: 250;">
          <div class="nombre col-9">
            <h4 class="card-title">${worker.nombre}</h4>
            <i class="bi bi-star-fill colorrojo"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-fill colorrojo"></i> <!-- ESTRELLA COMPLETA -->
            <i class="bi bi-star-half colorrojo"></i> <!-- ESTRELLA a la MITAD -->
            <i class="bi bi-star colorrojo"></i> <!-- ESTRELLA VACIA -->
            <span class="p-1">(${worker.reviews} reseñas )</span>
            <i class="bi bi-pin-map-fill p-5"> <!--MAPA-->
              <span class="p-2">${worker.municipal_}</span> – <span>${worker.state}</span>
            </i>
          </div>
        </div>
        <br>
        <p class="card-text">
          ${worker.description}
        </p>
        <ul class="list-inline">
          <li class="list-inline-item p-2"><strong>${worker.categories}</strong></li>
          ${subCategoryGenerator(worker.subcategories)}
        </ul>
        <button class="btn btn-primary" id="${worker.idUser}">Conóceme</button>
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
 * @function convierte los JSON a objetos
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

function buscaTodos(){
  
  fetch(`http://localhost:8080/api/users/`)
  .then(response => response.json())
  .then(data => {
    let card="";
    data.forEach(element=>{
      card+=plantilla(element);
    })
    renderCard(card);}
  )
  .catch(error=>{new Swal({
    icon: "error",
    title: "Error en la conexión. Lo lamentamos intenta recargar" ,
    confirmButtonColor:"#ff4716",
})})
}

function agregaLocal(){
  //console.log("bain"); 
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
function renderCard(card){
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
    obtenerTrabajador();

});
function obtenerTrabajador(){
  variable=document.getElementsByClassName("btn-primary");
  console.log(variable);
  for(let i=8;i<variable.length;i++){
    variable[i].addEventListener("click",function(e){
      e.preventDefault();
      redigirCliente(i);
    });
    
  }
}
function redigirCliente(indice){
  
  let arreglo=obtenerLocal();
  console.log(obtenerLocal());
  myStorage.setItem("TempTrabajador",[]);
  console.log(arreglo[indice]);
  myStorage.TempTrabajador=JSON.stringify(arreglo[indice-8]);
  window.location="./otroperfil.html"
}