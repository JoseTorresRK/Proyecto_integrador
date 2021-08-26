console.log(recolectarMyStorage("Cliente"));
console.log(recolectarMyStorage("Trabajador"))
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
    console.log("Mensaje para errores");
    console.log(encontrarPerfil());
    if(encontrarPerfil().length===0){
        construirSweetAlert("error","La contraseña o el usuario están mal");
    }
    encontrarPerfil().forEach(element => {
        console.log(correo);
        if(element.email===correo&&contrasena===element.password){
            crearMinimo();
            window.location="./lista_perfiles.html";

        }
        else{
            construirSweetAlert("error","La contraseña o el usuario están mal");
        }
        
    });
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