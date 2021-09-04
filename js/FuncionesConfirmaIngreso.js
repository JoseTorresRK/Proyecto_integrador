console.log(recolectarMyStorage("Cliente"));
console.log(recolectarMyStorage("Trabajador"));
let canva;
function buscaApi(email,password){

    fetch(`http://localhost:8080/api/users/login/?usuario=${email}&contrasena=${password}`)
  .then(response => response.json())
  .then(data => {
      window.localStorage.setItem("Temporal",[]);
      if(data.status!==undefined){
        new Swal({
            icon: "error",
            title: "La contraseña o el usuario están mal",
            confirmButtonColor:"#ff4716",
            
        })
        return;
      }
      crearMinimo();
      window.localStorage.Temporal=JSON.stringify(data);
    
    window.location="./lista_perfiles.html";}
  )
  .catch(error=>{new Swal({
    icon: "error",
    title: "Error en la conexión. Lo lamentamos intenta recargar" ,
    confirmButtonColor:"#ff4716",
});
console.log(error)});
  
}
function dobleCuenta(email){
    let arreglo=recolectarMyStorage("Trabajador");
    let arreglo2=recolectarMyStorage("Cliente");
    let resultado=[];
    for(let i=0;i<arreglo.length;i++){
        
        if(arreglo[i].email===email){
            resultado.push("Trabajador");
            resultado.push(i);
            break;
        }
    }
    for(let i=0;i<arreglo2.length;i++){
        
        if(arreglo2[i].email===email){
            resultado.push("Cliente");
            console.log("CLiente", i);
            resultado.push(i);
            break;
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
    let aux;
    console.log(result);
    if(result.length===4){
        aux=result;
        console.log("Rayito");
        Swal.fire({
            title: 'Usted tiene dos cuentas cliente y trabajador',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:'Entrar como trabajador ',
            confirmButtonText: 'Entrar como cliente'
          }).then((result) => {
            if (result.isConfirmed) {
                recolectarUsuario(aux[0],aux[1]);
                console.log(aux[0])
                console.log(aux[1])
                crearMinimo();
                    
                window.location="./lista_perfiles.html";
                    window.localStorage.loggedIn = true;
            }
             else{
                recolectarUsuario(aux[2],aux[3]);
                crearMinimo();
            
               window.location="./lista_perfiles.html";
                window.localStorage.loggedIn = true;
            }
          });
    }
    else{
        if("Trabajador"===result[0]){
            recolectarUsuario(result[0],result[1]);
        crearMinimo();
            
            window.location="./lista_perfiles.html";
            window.localStorage.loggedIn = true;
        }
        if("Cliente"===result[0]){
            recolectarUsuario(result[0],result[1]);
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
    let aux=true;
    console.log(buscaApi());
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
            aux=false;
            nuevoEncontrarPerfil(dobleCuenta(correo));
            
            
        }
        else{
            console.log(correo);
            console.log(contrasena);    
        }
                
    });
    if(aux){
    new Swal({
        icon: "error",
        title: "La contraseña o el usuario están mal",
        confirmButtonColor:"#ff4716",
    });
}
    
    //
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