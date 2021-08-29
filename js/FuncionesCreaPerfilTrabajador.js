// function calculateTotalStars( clientReviews) {
//     let sumStars = 0;
//     if(clientReviews.length===0){
//       return sumStars=false;
//     }
//     clientReviews.forEach(function(element){
//           sumStars += element.starsForJob;
//    });
//    return ( sumStars / clientReviews.length) ;
//   }
function creaEstrellas(reviews){
    //let star=calculateTotalStars(reviews);
    let star=reviews;
    let temp;
    let mensaje=``;
    if(!star){
        return `Espera a realizar un trabajo para obtener una calificación`;
    }
    temp=star-Math.floor(star);
    
    if(temp>=0 && temp<=.25){
        for(let i=0;i<Math.floor(star);i++){
            mensaje+=`<i class="bi bi-star-fill colororo"></i>`;
        }
        for(let i=0;i<5-Math.floor(star);i++){
            mensaje+=`<i class="bi bi-star colororo"></i>`;
        }
    }
    else{
        if(temp>.25 && temp<=.75){
            for(let i=0;i<Math.floor(star);i++){
                mensaje+=`<i class="bi bi-star-fill colororo"></i>`;
            }
            mensaje+=`<i class="bi bi-star-half colororo"></i>`;
            for(let i=0;i<5-Math.floor(star)-1;i++){
                mensaje+=`<i class="bi bi-star colororo"></i>`;
            }
            
        }
        else{
            for(let i=0;i<Math.round(star);i++){
                mensaje+=`<i class="bi bi-star-fill colororo"></i>`;
            }
            
            for(let i=0;i<5-Math.round(star);i++){
                mensaje+=`<i class="bi bi-star colororo"></i>`;
            }
        }
    }
    return mensaje;
}
function tempLocal(id){
    let registro
    arreglo=recolectarMyStorage("Trabajador");
    for(let i=0;i<arreglo.length;i++){
        console.log(arreglo[i]);
        console.log(typeof(arreglo[i].idUser));
        if(arreglo[i].idUser==id){
            registro=arreglo[i];
            break;
        }

    }
    console.log(registro)

    return registro;
}
function definirIcono(categoria){
    if(categoria==="Albañileria"){
        return "../images/ladrillo.svg";
    }
    if(categoria==="Carpinteria"){
        return "../images/carpinteria.svg";
    }
    if(categoria==="Cocina"){
        return "../images/horneando.svg";
    }
    if(categoria==="Herreria"){
        return "../images/herrero.svg";
    }
    if(categoria==="Plomeria"){
        return "../images/plomeria.svg";
    }
    if(categoria==="Jardineria"){
        return "../images/jardineria.svg";
    }
}
function mensajeSubcategoria(arreglo){
    let mensaje='';
    arreglo.forEach(element => {
        mensaje+=`<li class="d-flex justify-content-between align-items-center">
        ${element}
       </li>`
    });
    return mensaje;
}
function renderPerfil(perfil){
    let cardPerfil=document.getElementById("perfil");
    cardPerfil.innerHTML=`<div class="card" style="width: 100%;height: 100%;">
    <br>
    <img src="${perfil.profileImg}" class="imgRedonda mx-auto"  alt="...">
  
    <h3 style="text-align: center;"> ${perfil.name}</h3>
    <li class=" mx-auto">
    ${creaEstrellas(4.5)} 

    </li>
    
    <button class="botonicono" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-square iconopeq"></i></button>

    <ul class="list-group list-group-flush">
   
      <li class="list-group-item">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                <strong>Descripción</strong>
              </button>
            </h2>
            
            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">${perfil.description} <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></botton></div>
              
            </div>
            <ul>
          
          
           
        </ul>
          </div>
          </div>
      </li>
      <li class="list-group-item ">
        
        <strong>Categorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
        <ul>
          <li class="d-flex justify-content-between align-items-center">
             ${perfil.categories}
              <img  src="${definirIcono(perfil.categories)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> </li>
          
        </ul>
      </li>

      <li class="list-group-item ">
        <strong>Subcategorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
        <ul>
          ${mensajeSubcategoria(perfil.subcategories)}
        </ul>
      </li>

      <li class="list-group-item"><strong>Localidad:</strong>
      <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
      <ul>
        <li>Estado: ${perfil.state}</li>
        <li>Municipio:${perfil.municipal_delegation}</li>
        <li>CP:${perfil.zip}</li>
      </ul></li>
      <li class="list-group-item">
        <strong>Contacto:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>

        <ul>
          <li>
            Correo: ${perfil.email}
          </li>
          <li>
            Teléfono: ${perfil.tel}
          </li>
        </ul>

      </li>
    </ul>
    
  </div>
`;
}
function cambiarImagen(){
    
}
