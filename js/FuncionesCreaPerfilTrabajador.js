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
    let registro;
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
    let categorias="";
    let subcategoria="";
    if(perfil.isEmployee){
        categorias=`<li class="list-group-item ">
        
        <strong>Categorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
        <ul>
          <li class="d-flex justify-content-between align-items-center">
             ${perfil.categories}
              <img  src="${definirIcono(perfil.categories)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> </li>
          
        </ul>
      </li>`
      subcategoria=`
      <li class="list-group-item ">
        <strong>Subcategorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
        <ul>
          ${mensajeSubcategoria(perfil.subcategories)}
        </ul>
      </li>`;
    }
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
      ${categorias}      
      ${subcategoria}

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
return perfil;
}
function cambiarDatos(numeroCampo,mensaje,boleano,id,arregloTrabajos){
  let botonConfirmar;
  let botonCancelar;
  let elemento=document.querySelectorAll(".list-group-item");
  let mensajeAnterior=[elemento[numeroCampo].firstElementChild,elemento[numeroCampo].lastElementChild];
  elemento[numeroCampo].removeChild(elemento[numeroCampo].firstElementChild);
mensajeAnterior.push(elemento[numeroCampo].firstElementChild);
  let camposAnteriores=elemento[numeroCampo].querySelectorAll("ul li ul li");
  let contenedor;
  console.log(camposAnteriores[0]);

  elemento[numeroCampo].innerHTML=mensaje;
 // console.log(aux);
  if(boleano){
    marcarCorrecto(id,camposAnteriores,arregloTrabajos);
  }
  console.log(document.querySelector("#"+id));
  botonConfirmar=document.querySelector("#"+id+" #formConfirmar");
  botonCancelar=document.querySelector("#"+id+" #formCancelar");
  console.log(botonCancelar);
  botonConfirmar.addEventListener("click",function(e){
    e.preventDefault();
    if(boleano){
      recolectar(id,elemento[numeroCampo],mensajeAnterior);
    }
    else{
      console.log("Localidad");
      if(id==="Localidad"){
        let arregloLocal=[validarSeleccion,validarLetras,validarLetras,validarZip,validarNum,validarNum];
        
        contenedor=document.querySelectorAll("#Localidad .position-relative");
       // console.log(contenedor[0].querySelector("#inputState").value)
       console.log(cambiarClase(contenedor[0].lastElementChild,arregloLocal[0](contenedor[0].querySelector("#inputState").value),contenedor[0].querySelector("#inputState")));
       for(let i=1;i<contenedor.length;i++){
        console.log(cambiarClase(contenedor[i].lastElementChild,arregloLocal[i](contenedor[i].firstElementChild.value),contenedor[i].firstElementChild));
       }
        
   //     cambiarClase(contenedor[1].lastElementChild,)
      }
      if(id==="Contacto"){
        contenedor=document.querySelectorAll("#Contacto .position-relative");
        cambiarClase(contenedor[0].lastElementChild,validarEmail(contenedor[0].firstElementChild.value),contenedor[0].firstElementChild);
        cambiarClase(contenedor[1].lastElementChild,validarTelefono(contenedor[1].firstElementChild.value),contenedor[1].firstElementChild);


      }
    }

    
  })
  botonCancelar.addEventListener("click",function(e){
    e.preventDefault();
    console.log(mensajeAnterior);
    agregarAnterior(mensajeAnterior,elemento[numeroCampo]);

  })
}
 

function agregarAnterior(mensajeAnterior,elemento){
  console.log(mensajeAnterior);
  console.log(elemento)
  elemento.innerHTML="";
  elemento.appendChild(mensajeAnterior[0]);
  elemento.appendChild(mensajeAnterior[2]);
  elemento.appendChild(mensajeAnterior[1])
  //elemento.innerHTML+=mensajeAnterior[0]+mensajeAnterior[1];
}

function recolectar(id,elemento,mensajeAnterior){
  let checkbox=document.querySelectorAll("#"+id+" .form-check input");
  //let etiquetas=document.querySelectorAll("#"+id+" .form-check label");
  let mensaje="";
  let imagen="";
  elemento.innerHTML="";
  elemento.appendChild(mensajeAnterior[0]);
  elemento.appendChild(mensajeAnterior[2]);
  let valores=[];
 
  for(let i=0;i<checkbox.length;i++){
    if(id==="Categoria"){
      imagen=`<img  src="${definirIcono(checkbox[i].value)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> `;
    }
    console.log(checkbox[i].checked);
    if(checkbox[i].checked){
      mensaje+=`<li class="d-flex justify-content-between align-items-center">
      ${checkbox[i].value}${imagen}</li>`;
       
    }
  }

  //elemento.appendChild(document.createElement("ul"));
  let variable=document.createElement("ul");
  variable.innerHTML=mensaje;
  elemento.appendChild(variable);


  return valores;
}
function conseguirArreglo(checkbox){
  let arreglo=[];
  for(let i=0;i<checkbox.length;i++){
    arreglo.push(checkbox[i].value.trim());
  }
  console.log(arreglo);
  return arreglo;
}

function marcarCorrecto(id,camposAnteriores,arregloTrabajos){
  
  console.log(document.querySelectorAll("#"+id+" .form-check"));
  let checkbox=document.querySelectorAll("#"+id+" .form-check input");
  //let checker=document.querySelectorAll("#"+id+" .form-check label");
  //console.log(checker)
  let categoriasAnteriores=[];
  for(let i=0;i<camposAnteriores.length;i++){
    categoriasAnteriores[i]=camposAnteriores[i].textContent.trim();
    console.log(categoriasAnteriores[i]);
    console.log(categoriasAnteriores[i]);
  }
  console.log(checkbox)
  arregloTrabajos= conseguirArreglo(checkbox);
  console.log(arregloTrabajos)
  //let entradas=checkbox.querySelectorAll("form-check-input");
  
  categoriasAnteriores.forEach(function(elemento){
    console.log(arregloTrabajos.indexOf("Fregaderos"));
    console.log(arregloTrabajos);
    checkbox[arregloTrabajos.indexOf(elemento)].setAttribute("checked","true");
    console.log(checkbox)
  })
/*
  // for(let i=0;i<etiquetas.length;i++){
  //   if(etiquetas.textContent)
  // }*/
}


function cambiarDesc(){
  //
  let botonSuc;
  let botonDan;
  let modificador;
  let descripcionOriginal;
  let elemento=document.querySelector(".list-group-item .accordion-body");
  descripcionOriginal=elemento.childNodes;
  console.log(elemento)
  console.log(descripcionOriginal[0].textContent);
  mensaje=descripcionOriginal[0].textContent;
  botonOriginal=elemento.lastChild;
  elemento.innerHTML=`
  <div class="position-relative">
  <textarea
  class="form-control formato"
  rows="8"
  placeholder="Un mensaje para nosotros:"
  name="message"
  id="Descripcion"
  required
  ></textarea>
  <div class="valid-tooltip">
    Campo válido.
  </div>
  </div>
  <div class="row" style="margin-top:3em">
  <div class="col-6">
    <button class="btn btn-success"id="Descconfirmar" type="submit">Confirmar cambio</button>
  </div>
  <div class="col-6">
    <button class="btn btn-danger" id="Desccancelar" type="submit">Cancelar</button>
  </div>
  </div>`
  ;
  modificador=document.getElementsByClassName("position-relative");
  botonSuc=document.getElementById("Descconfirmar");
  
  botonSuc.addEventListener("click",function(e){
    e.preventDefault();
    //console.log(modificador[0].lastElementChild)
    let mensaje=validarDescripcion(cambio.value);
    let nuevaDescripicion=cambiarClase(modificador[0].lastElementChild,mensaje);
    console.log(nuevaDescripicion);
    if(nuevaDescripicion!==""){
      elemento.innerHTML=`${nuevaDescripicion}`;
      elemento.appendChild(botonOriginal);
    }
    
   // modificador[0].lastElementChild.innerText="Bankai";
  })
  botonDan=document.getElementById("Desccancelar");
  botonDan.addEventListener("click",function(e){
    e.preventDefault();
    console.log(botonOriginal)
    elemento.innerHTML=`${mensaje}`;
    elemento.appendChild(botonOriginal);
  })
}


function cambiarClase(modificador,mensaje, cambio=document.getElementById("Descripcion")){
  
  //let mensaje=validarDescripcion(cambio.value);
  
  console.log(modificador);
  console.log(mensaje);
  if(typeof(mensaje)==="string"){
    console.log(modificador);
    console.log(cambio.classList);
    cambio.classList.remove("is-valid");
    cambio.classList.add("is-invalid");
    console.log(modificador.classList);
    
    modificador.classList.remove("valid-tooltip");
    
    modificador.classList.add("invalid-tooltip");
    console.log(modificador.classList);
    //cambio.getElementById()
    modificador.innerText=mensaje;
  }
  else{
    cambio.classList.remove("is-invalid");
    cambio.classList.add("is-valid");
    console.log(cambio)
    console.log(modificador)
    modificador.classList.remove("invalid-tooltip");
    console.log(modificador);
    modificador.classList.add("valid-tooltip");
    
    
    
    modificador.innerText="Campo válido";
  }
  return cambio.value
}
 

function cambiarImagen(){
    
}
function crearMensaje(arreglo){
  let mensaje=`
  <strong>Selecciona tus subcategorias</strong>
  <div id="Subcategoria">${obtenerArregloCompleto(arreglo)}
  <div class="row" style="margin-top:3em">
  <div class="col-6">
    <button class="btn btn-success"id="formConfirmar" type="submit">Confirmar cambio</button>
  </div>
  <div class="col-6">
    <button class="btn btn-danger" id="formCancelar" type="submit">Cancelar</button>
  </div>
  </div>
  </div>`
  console.log(mensaje);
  return mensaje;
  console.log(completo);
  
}
function obtenerArregloCompleto(arreglo){
  let completo="";
  arreglo.forEach(function(elemento){
     console.log(opcionesSubcategory(elemento))
     completo+=opcionesSubcategory(elemento);
    });

  console.log(completo);
  return completo;
}