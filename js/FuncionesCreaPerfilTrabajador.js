
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
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                Descripción
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">${perfil.description}</div>
            </div>
          </div>
          </div>
      </li>
      <li class="list-group-item ">
        
        <strong>Categorías:</strong>
        <button><img src="../images/boligrafo.svg" style="height: 20px;width: 20px;" alt=""></button>
        <ul>
          <li class="d-flex justify-content-between align-items-center">
             ${perfil.categories}
              <img  src="${definirIcono(perfil.categories)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> </li>
          
        </ul>
      </li>

      <li class="list-group-item ">
        <strong>Subcategorías:</strong>
        <button><img src="../images/boligrafo.svg" style="height: 20px;width: 20px;" alt=""></button>
        <ul>
          ${mensajeSubcategoria(perfil.subcategories)}
        </ul>
      </li>

      <li class="list-group-item"><strong>Localidad</strong>
        <button><img src="../images/boligrafo.svg" style="height: 20px;width: 20px;" alt=""></button>
      <ul>
        <li>Estado: ${perfil.state}</li>
        <li>Municipio:${perfil.municipal_delegation}</li>
        <li>CP:${perfil.zip}</li>
      </ul></li>
      <li class="list-group-item">
        <strong>Contacto:</strong>
        <button><img src="../images/boligrafo.svg" style="height: 20px;width: 20px;" alt=""></button>
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
renderPerfil(tempLocal(1008));