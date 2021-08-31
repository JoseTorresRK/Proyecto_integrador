console.log(recolectarMyStorage("Cliente"));
console.log(recolectarMyStorage("Trabajador"));
function dobleCuenta(email){
    let arreglo=recolectarMyStorage("Trabajador");
    let arreglo2=recolectarMyStorage("Cliente");
    let resultado=[];
    for(let i=0;i<arreglo.length;i++){
        
        if(arreglo[i].email===email){
            resultado.push("Trabajador");
            resultado.push(i);
        }
    }
    for(let i=0;i<arreglo2.length;i++){
        
        if(arreglo[i].email===email){
            resultado.push("Cliente");
            resultado.push(i);
        }
    }
    if(resultado.length===0){
        resultado.push(false);
    }
    
    return resultado;
}
function recolectarUsuario(usuario,posicion){
    let arreglo=recolectarMyStorage(usuario);
    console.log(arreglo[posicion]);
    myStorage.setItem("Temporal",[]);
    myStorage.setItem("Temporal",JSON.stringify(arreglo[posicion]));

}
function nuevoEncontrarPerfil(result){
    
    if(result.length===4){

    }
    else{
        if("Trabajador"===result[0]){
            recolectarUsuario(result[0],result[1]);
        crearMinimo();
            
            window.location="./lista_perfiles.html";
            window.localStorage.loggedIn = true;
        }
        if("Cliente"===result[0]){
            recolectarUsuario(result[2],result[3]);
            crearMinimo();
        
            window.location="./lista_perfiles.html";
            window.localStorage.loggedIn = true;
        }
    }
}
function encontrarPerfil(){
    let arreglo=recolectarMyStorage("Trabajador");
    console.log(arreglo);
    recolectarMyStorage("Cliente").forEach(element => {
        arreglo.push(element);
    
    });
    return arreglo;
}

function compararPerfil(correo,contrasena){
   // e.preventDefault();
    //console.log("Mensaje para errores");
    //console.log(encontrarPerfil());
    if(encontrarPerfil().length===0){
        construirSweetAlert("error","La contraseña o el usuario están mal");
    }
    console.log(encontrarPerfil());
    encontrarPerfil().forEach(element => {
        console.log(element.email);
        console.log(element.password);
        console.log(contrasena)
        console.log(correo)
        if(element.email===correo&&contrasena===element.password){
            console.log("entraste");
            nuevoEncontrarPerfil(dobleCuenta(correo));
            return;
        }
        else{
            console.log(correo);
            console.log(contrasena);    
        }
        
    });
    construirSweetAlert("error","La contraseña o el usuario están mal");
}
function crearMinimo(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Registro válido, bienvenido'
      })
}