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
function creaEstrellas(reviews,clase="colororo"){
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
            mensaje+=`<i class="bi bi-star-fill ${clase}"></i>`;
        }
        for(let i=0;i<5-Math.floor(star);i++){
            mensaje+=`<i class="bi bi-star ${clase}"></i>`;
        }
    }
    else{
        if(temp>.25 && temp<=.75){
            for(let i=0;i<Math.floor(star);i++){
                mensaje+=`<i class="bi bi-star-fill ${clase}"></i>`;
            }
            mensaje+=`<i class="bi bi-star-half ${clase}"></i>`;
            for(let i=0;i<5-Math.floor(star)-1;i++){
                mensaje+=`<i class="bi bi-star ${clase}"></i>`;
            }
            
        }
        else{
            for(let i=0;i<Math.round(star);i++){
                mensaje+=`<i class="bi bi-star-fill ${clase}"></i>`;
            }
            
            for(let i=0;i<5-Math.round(star);i++){
                mensaje+=`<i class="bi bi-star ${clase}"></i>`;
            }
        }
    }
    return mensaje;
}
function recolectarPerfiles(){
  console.log(myStorage.Temporal);
  console.log(JSON.parse(myStorage.Temporal));
  return (JSON.parse(myStorage.Temporal));
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
    //arreglo.forEach(element => {
        mensaje+=`<li class="d-flex justify-content-between align-items-center">
        ${arreglo}
       </li>`
    ///});
    return mensaje;
}

function separaCadena(cadena){
  let arreglo=cadena.split("*");
  if(arreglo.length===1){
    return arreglo;
  }
  arreglo.pop();
  console.log(arreglo)
  return arreglo;
}

function generarCategoria(arreglo){
  let categoria="";
  arreglo.forEach(element=>{
    categoria+= 
    `<ul>
      <li class="d-flex justify-content-between align-items-center">
         ${element}
          <img  src="${definirIcono(element)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> </li>
      
    </ul>`;
  
  })
  return categoria;
}
function generarSubcategoria(arreglo){
  let subcategoria="";
  arreglo.forEach(element=>{
    subcategoria+=
      `
      <ul>
        ${element}
      </ul>
    `;
  })
  return subcategoria;
}

function renderPerfil(perfil,ubicacionPerfil){
    let cardPerfil=document.getElementById("perfil");
    console.log(perfil)
    console.log(ubicacionPerfil.estado)
    let categorias="";
    let subcategoria="";
    if(perfil.tipo===1){
        categorias=`<li class="list-group-item ">
        
        <strong>Categorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>${generarCategoria(separaCadena(perfil.categoria))}</li>`;
      subcategoria=`
      <li class="list-group-item ">
        <strong>Subcategorías:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>
          ${ generarSubcategoria(separaCadena(perfil.subcategoria))}
        </li>`;
    }
    cardPerfil.innerHTML=`<div class="card" style="width: 100%;height: 100%;">
    <br>
    <img src="${perfil.imgperfil}" class="imgRedonda mx-auto"  alt="...">
  
    <h3 style="text-align: center;"> ${perfil.nombre}</h3>
    <li class=" mx-auto">
    ${creaEstrellas(perfil.estrellas)} 

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
              <div class="accordion-body">${perfil.descripcionusuario} <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></botton></div>
              
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
        <li>Estado: ${ubicacionPerfil.estado}</li>
        <li>Municipio:${ubicacionPerfil.municipio}</li>
        <li>CP:${ubicacionPerfil.codigopostal}</li>
      </ul></li>
      <li class="list-group-item">
        <strong>Contacto:</strong>
        <button class="botonicono"><i class="bi bi-pencil-square iconopeq"></i></button>

        <ul>
          <li>
            Correo: ${perfil.email}
          </li>
          <li>
            Teléfono: ${perfil.telefono}
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
  let cancelar=[];
  let elemento=document.querySelectorAll(".list-group-item");
  let mensajeAnterior=[elemento[numeroCampo].firstElementChild,elemento[numeroCampo].lastElementChild];
  elemento[numeroCampo].removeChild(elemento[numeroCampo].firstElementChild);
  mensajeAnterior.push(elemento[numeroCampo].firstElementChild);
  let camposAnteriores=elemento[numeroCampo].querySelectorAll("ul li ul li");
  let contenedor;
  let cancelar2=[];
  console.log(elemento);
  console.log(mensajeAnterior[0]);
  console.log(mensajeAnterior[1])
  console.log(mensajeAnterior[2]);

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
       cancelar.push(arregloLocal[0](contenedor[0].querySelector("#inputState").value));
       cambiarClase(contenedor[0].lastElementChild,arregloLocal[0](contenedor[0].querySelector("#inputState").value),contenedor[0].querySelector("#inputState"));
       for(let i=1;i<contenedor.length;i++){
        cancelar.push(arregloLocal[0](contenedor[0].querySelector("#inputState").value));
      (cambiarClase(contenedor[i].lastElementChild,arregloLocal[i](contenedor[i].firstElementChild.value),contenedor[i].firstElementChild));
       }
       recolectar(id,elemento[numeroCampo],mensajeAnterior,cancelar);
        
   //     cambiarClase(contenedor[1].lastElementChild,)
      }
      if(id==="Contacto"){
        contenedor=document.querySelectorAll("#Contacto .position-relative");
         (cambiarClase(contenedor[0].lastElementChild,validarEmail(contenedor[0].firstElementChild.value),contenedor[0].firstElementChild));
        cancelar2.push(validarEmail(contenedor[0].firstElementChild.value));
        (cambiarClase(contenedor[1].lastElementChild,validarTelefono(contenedor[1].firstElementChild.value),contenedor[1].firstElementChild));
        cancelar2.push(validarTelefono(contenedor[1].firstElementChild.value));
        recolectar(id,elemento[numeroCampo],mensajeAnterior,cancelar2);
        
      }
    }
    cancelar=[];
    cancelar2=[];
    
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

function todoCorrecto(cancelar){
  console.log(cancelar);
  for(let i=0;i<cancelar.length;i++){
    if(cancelar[i]!==true){
      return false;
    }
  }
 
  return true
}


function categoriaSubcategoria(aux,categoria,id){
  console.log(id);
  let auxiliar;
  if(id==="Categoria"){
    alterarCampo(aux,categoria.idusuarios,"categoria/","?categoria=");
  //elemento.appendChild(document.createElement("ul"));
  console.log(aux);
    categoria.categoria=aux;
    window.localStorage.Temporal=JSON.stringify(categoria);
  }
  else{
    
    alterarCampo(cambiarEspaciosBlanco(aux),categoria.idusuarios,"subcategoria/","?subcategoria=");
  //elemento.appendChild(document.createElement("ul"));
  console.log(categoria);
  console.log(aux.value);
    categoria.subcategoria=aux;
    console.log(categoria);
    window.localStorage.Temporal=JSON.stringify(categoria);
  }
  
}

function obtenerCadenaCompleta(arreglo){
  let mensaje="";
  console.log(arreglo);
  console.log(arreglo[0])
  for(let i=0;i<arreglo.length;i++){
    console.log(arreglo[i]);
    mensaje+=arreglo[i].value+"*";
  }
  return mensaje;
}

function cambiarEspaciosBlanco(cadena){
  let arreglo= cadena.split(" ");
  let cadenaConSeparador="";
  for(let i=0;i<arreglo.length;i++){
    if(i!==arreglo.length-1){
      cadenaConSeparador+=arreglo[i]+"+";

    }
    else{
      cadenaConSeparador+=arreglo[i];
    }
  }
  return cadenaConSeparador;
}

function recolectar(id,elemento,mensajeAnterior,cancelar){
  let checkbox=document.querySelectorAll("#"+id+" .form-check input");
  //let etiquetas=document.querySelectorAll("#"+id+" .form-check label");
  let lista ;
  let tempUbicacion;
  let arregloUsuario=JSON.parse(window.localStorage.Temporal);
  //let estado=actualizarContacto(arregloUsuario.email,arregloUsuario.idusuarios,"contacto/","?email=",`&telefono=${arregloUsuario.telefono}`);
  //console.log(estado);
  
   
  if("Localidad"===id||"Contacto"===id){
    //console.log(estado)
    
      /*if(estado!==undefined){
        construirSweetAlert("error","Este correo ya tiene una cuenta","","");
      }*/
    if(todoCorrecto(cancelar)/*&&estado===undefined*/){
      if("Localidad"===id){
        lista=cambioFormulario(id,true);
          console.log(lista)
          elemento.innerHTML="";
          elemento.appendChild(mensajeAnterior[0]);
          elemento.appendChild(mensajeAnterior[2]);
      
          elemento.appendChild(lista);
        }
      if("Contacto"===id){
          lista=cambioFormulario(id,false);
          console.log(window.localStorage.temporaContacto)
          tempUbicacion=JSON.parse(window.localStorage.temporaContacto)
          console.log(tempUbicacion);
          actualizarContacto(tempUbicacion.email,tempUbicacion.idusuarios,"contacto/","?email=",`&telefono=${tempUbicacion.telefono}`,mensajeAnterior,lista,elemento,tempUbicacion.telefono)
      }
      }
      return
    }
  
  let mensaje="";
  let imagen="";
  let cadena="";
  elemento.innerHTML="";
  
  elemento.appendChild(mensajeAnterior[0]);
  elemento.appendChild(mensajeAnterior[2]);
  let valores=[];
 let categoria=JSON.parse( window.localStorage.Temporal);
 let aux; 
  for(let i=0;i<checkbox.length;i++){
    if(id==="Categoria"){
      imagen=`<img  src="${definirIcono(checkbox[i].value)}" class="pr-auto" style="height: 50px;width: 50px;" alt=""> `;
    }
    
    
    if(checkbox[i].checked){
      mensaje+=`<li class="d-flex justify-content-between align-items-center">
      ${checkbox[i].value}${imagen}</li>`;
      //aux=checkbox[i]; 
      cadena+=checkbox[i].value+"*";
    }
  }
 
  categoriaSubcategoria(cadena,categoria,id)
  
  //elemento.appendChild(document.createElement("ul"));

    window.localStorage.Temporal=JSON.stringify(categoria);
  let variable=document.createElement("ul");
  variable.innerHTML=mensaje;
  elemento.appendChild(variable);


  return valores;

}

function actualizarUbicacion(nuevaUbicacion){
  let url=`http://localhost:8080/api/ubicacion/actualizar/${nuevaUbicacion.idubicacion}`
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(nuevaUbicacion), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    },
    
  }).then(res => res.json())
  .then( data=>{
    console.log(data);
    //console.log(data.status);
    
   /* if(data.status!==undefined){
        console.log("EEEEEEEEEEEEEEE");
        construirSweetAlert("error","Ese correo ya esta usado por una cuenta, ingrese otro correo.","","");
        global=true;
                 
    }*/})
.catch(error=>{console.log("error")});
}


function cambioFormulario(id,num){
  console.log(id)
  let seleccion=document.querySelectorAll("#"+id+" input");
  let entradas=document.querySelectorAll("#"+id+" #inputState");
  let mensaje;
  console.log(seleccion)
  let temporal=JSON.parse( window.localStorage.Temporal);
  let temporaUbicacion=JSON.parse(window.localStorage.UbicacionTemp);
  console.log(entradas)
  if(num===true){
    mensaje=`<li>Estado:${entradas[0].value}</li><li>Municipio:${seleccion[0].value}</li><li>CP:${seleccion[1].value}</li>`;
    temporaUbicacion.estado=entradas[0].value;
    temporaUbicacion.municipio=seleccion[0].value;
    temporaUbicacion.calle=seleccion[1].value;
    temporaUbicacion.codigopostal=seleccion[2].value;
    temporaUbicacion.numeroext=seleccion[3].value
    temporaUbicacion.numeroint=seleccion[4].value
    actualizarUbicacion(temporaUbicacion);
    window.localStorage.UbicacionTemp=JSON.stringify(temporaUbicacion);
  }
  else{
    mensaje=`<li>Correo:${seleccion[0].value}</li><li>Teléfono:${seleccion[1].value}</li>`;
    if(temporal.email!==seleccion[0].value||temporal.telefono!==seleccion[1].value){
      temporal.email=seleccion[0].value;
      temporal.telefono=seleccion[1].value;
      console.log(temporal)
      window.localStorage.temporaContacto=JSON.stringify(temporal);
      //let ajuste= actualizarContacto(temporal.email,temporal.idusuarios,"contacto/","?email=",`&telefono=${temporal.telefono}`)
      //console.log(ajuste)
    }
  }
  let variable=document.createElement("ul");
  variable.innerHTML=mensaje;
  return variable;

}

function actualizarContacto(campo,idusuario,enlace,mensaje,valorDefault="",mensajeAnterior="",lista="",elemento="",telefono=""){
  let temporal
  url=`http://localhost:8080/api/users/${enlace}${idusuario}${mensaje}${campo}${valorDefault}`
  console.log(url);
  fetch(url, {
    method: 'PUT', // or 'PUT'
  })
  .then(res=>res.json())
  .then(data=>{
                  console.log(data)
                  if(data!==undefined){
                     construirSweetAlert("error","Este correo ya tiene una cuenta","","");                     
                  }
                  
                                   
  })
  .catch(error=> {
    elemento.innerHTML="";
    elemento.appendChild(mensajeAnterior[0]);
    elemento.appendChild(mensajeAnterior[2]);
    elemento.appendChild(lista);
    temporal=JSON.parse(window.localStorage.Temporal);
    temporal.email=campo;
    temporal.telefono=telefono;
    window.localStorage.Temporal=JSON.stringify(temporal);
  })
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
    
    console.log(arregloTrabajos);
    if(arregloTrabajos.indexOf(elemento)!==-1){
      checkbox[arregloTrabajos.indexOf(elemento)].setAttribute("checked","true");
       console.log(checkbox)
    }
    
  })
/*
  // for(let i=0;i<etiquetas.length;i++){
  //   if(etiquetas.textContent)
  // }*/
}

function cambioCategoriaSubcategoria(){
  
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
  >${JSON.parse(window.localStorage.Temporal).descripcionusuario}</textarea>
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
    let cambio=document.getElementById("Descripcion");
    //console.log(modificador[0].lastElementChild)
    let mensaje=validarDescripcion(cambio.value);
    console.log(cambio.value);
    let arreglo=JSON.parse(window.localStorage.Temporal);
    let nuevaDescripicion=cambiarClase(modificador[0].lastElementChild,mensaje);
    console.log(nuevaDescripicion);
    console.log(JSON.parse (window.localStorage.Temporal).descripcionusuario)
    arreglo.descripcionusuario=nuevaDescripicion;
    console.log(JSON.parse (window.localStorage.Temporal).descripcionusuario)
    window.localStorage.Temporal=JSON.stringify(arreglo);
    alterarCampo(nuevaDescripicion,JSON.parse(window.localStorage.Temporal).idusuarios,"Desc/","?Desc=")
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