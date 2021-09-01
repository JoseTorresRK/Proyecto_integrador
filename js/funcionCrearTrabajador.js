function plantilla (worker,cliente){
    //const imag=URL.createObjectURL(worker.img);+
    let mensaje=JSON.parse(window.localStorage.Temporal);
    
    let boton;
    if(mensaje.isEmployee){
      boton=`<button class="btn btn-primary aceptar" id="${worker.idUser}">Aceptar trabajo</button>`      
    }
    else{
      boton=`<h3>Espera a que acepte el trabajador</h3>`      
    }
    //console.log(worker);
      return `
      <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <img src="${cliente.profileImg}" alt="profile_mute" class="col-2" style="width: 250;height: 250;">
            <div class="nombre col-9">
              <h4 class="card-title">${cliente.name}nnnn</h4>
              <h4 class="card-title">${worker.nombre}
              <i class="bi bi-star-fill colorrojo"></i> <!-- ESTRELLA COMPLETA -->
              <i class="bi bi-star-fill colorrojo"></i> <!-- ESTRELLA COMPLETA -->
              <i class="bi bi-star-half colorrojo"></i> <!-- ESTRELLA a la MITAD -->
              <i class="bi bi-star colorrojo"></i> <!-- ESTRELLA VACIA -->
              <i class="bi bi-pin-map-fill p-5"> <!--MAPA-->
                <span class="p-2">${worker.ubicacion}</span> – <span>${worker.estado}</span>
              </i>
            </div>
          </div>
          <br>
          <p class="card-text">
            ${worker.descripcion}
          
            </p>
          
          ${boton}
        </div>
      </div>
    </div>
    
    <br>
      `
  }
function recolectarTrabajado(){
  let localsto=window.localStorage;
  let variable;
  let bandera;
  let agregar=[[],[]];
  console.log(localsto);
  let cliente=variable=JSON.parse(localsto.Cliente);
  let trabajador=JSON.parse(localsto.Trabajador);
  let local=JSON.parse( localsto.Temporal);
  let trabajosPend=JSON.parse(localsto.Trabajos)
  console.log(trabajosPend);
  if(local.isEmployee){
    variable=JSON.parse( localsto.Trabajador);
    bandera=true;
  }
  else{
    variable=JSON.parse( localsto.Cliente);
    bandera=false;
  }

  for(let i=0;i<trabajosPend.length;i++){
    console.log(trabajosPend[0].idUser);
    console.log(local.idUser);
    if(trabajosPend[0].idUser===local.idUser){
      agregar[0].push(trabajosPend[i]);
      agregar[1].push(buscar(variable,local.idUser));             
    }
  }
  return agregar;
}

function botones(indice){
  let temporal
  let temporal2
  let local=JSON.parse (window.localStorage.Trabajos);
  let localAlmacenamiento=window.localStorage;
  if(local.indexOf(indice)===0){
    local.shift();
  }
  else{
    if(local.indexOf(indice)===local.length-1){
      local.pop();
    }
    else{
      temporal=local.slice(0,local.indexOf(indice));
      temporal2=local.slice(local.indexOf(indice),local.length-1);
      for (let i=0;i<temporal2.length;i++){
        temporal.push(temporal2[i]);
      }
    }
  }
  
  localAlmacenamiento.setItem("Trabajador",temporal);

   
}

function buscar(variable,localId){
  for(let i=0;i<variable.length;i++){
    if(localId===variable[i].idUser){
      return variable[i];      
    }
  }
}