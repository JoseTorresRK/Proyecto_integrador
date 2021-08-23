//Funciones para validar el registro del cliente o trabajador.


const myStorage=window.localStorage;
//myStorage.removeItem("Trabajadores")
function mensajeValidacion(tipoMensaje,input,campo){
    let validar=document.querySelectorAll("#contact-form div .position-relative");
    let validacionDinamica;
    let mensaje;
    console.log(validar);
    if(tipoMensaje==true){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        validar[campo].removeChild(validar[campo].lastElementChild);
        
        validacionDinamica=document.createElement("div");
        validacionDinamica.classList.add("valid-tooltip")
        mensaje=document.createTextNode("Campo valido");
        validacionDinamica.appendChild(mensaje);
        validar[campo].appendChild(validacionDinamica);
        //validar[campo].+=`<div class="valid-tooltip">Campo valido</div>`;
        return true;
    }
    else{
        console.log(input)
        input.classList.add("is-invalid");
        validar[campo].removeChild(validar[campo].lastElementChild);
        validacionDinamica=document.createElement("div");
        validacionDinamica.classList.add("invalid-tooltip")
        mensaje=document.createTextNode(tipoMensaje);
        validacionDinamica.appendChild(mensaje);
        validar[campo].appendChild(validacionDinamica);
        //validar[campo].innerHTML+=`<div class="invalid-tooltip">${tipoMensaje}</div>`;
        return false;
    }

}
function validarImagen(imagen){
    if("Ningún archivo seleccionado"===imagen){
        return "Debes seleccionar un archivo";
    }
    if(!((/\.(jpg|png|jfif)$/).test(imagen))){
        return "Debes seleccionar una imagen jpg png o jfif";
    }
    return true;
}
function validarNum(numero){
    if(numero.length<=0){
        return "El campo no puede estar vacio";
    }
    
    if(!(/^[A-Z][0-9]{1,4}$|^[0-9]{1,4}$/.test(numero.toUpperCase()))){
        return "El número solo puede contener una letra seguido de uno a cuatro digitos o no tener letra y tener de uno a cuatro digitos";

    }
    return true;
}
function validarDescripcion(descripcion){
    if(descripcion.length<=0){
        return "El campo no puede estar vacio";
    }
    return true;
}
function validarZip(zip){
    if(zip.length<=0){
        return "El campo no puede estar vacio";
    }
    if(!(/^[0-9]+$/).test(zip)){
        return "El campo solo puede contener números";
    }
    if(zip.length!==5){
        return "El código postal, debe tener cinco digitos";
    }
    return true;
}
function validarLetras(nombre){
    if(nombre.length<=0){
       console.log(nombre.length);
        return "El campo no puede estar vacio";
    }
    if(!(/^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/.test(nombre))){
        return "El campo solo puede tener letras, espacios, acentos y ¨";
    }
    return true;
}
function validarSeleccion(estado){
    if(estado==""){
        return "Debes seleccionar uno";
    }
    else{
        return true;
    }
}
function validaContrasena(contrasena){
    console.log(contrasena)
    if(contrasena.length<=0){
        return "El campo no puede estar vacio";
    }
    if(!(/^[!-~\s]{6,}$/.test(contrasena))){
        return "El campo debe contener seis o más carácteres";
    }
    return true;
}
function confirmaContrasena(confirmacion,contrasena,primeraValidacion){
    if(primeraValidacion===true){
        if(confirmacion===contrasena){
            return true;
        }
        else{
            return "Las contraseñas no coinciden";
        }
    }
    return primeraValidacion;
}
function validarEmail(email){
    if(email.length<=0){
        return "El campo no puede estar vacio";
    }
    if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/.test(email.toUpperCase()))){
        return "El email no es valido";
    }
    return true;
}

function validarTelefono(telefono){
    console.log(typeof(telefono));
    let soloNumeros="Este campo solo acepta números y debe tener diez digitos";
    if(telefono.length<=0){
        console.log("Estoy vacio")
        return "El campo no puede estar vacio";
    }
    if(!(/^[0-9]+$/.test(telefono))){
        console.log("Pero si soy un numero")
        return soloNumeros;
    }
    if(telefono.length!=10){
        
        return soloNumeros;
    }
    return true;
}
function construirSweetAlert(imagen,titulo,mensaje,piePagina){
    new Swal({
        icon: imagen,
        title: titulo,
        text: mensaje,
        footer: piePagina
    })
}
function validarFormulario(e){
    console.log("entre");
    e.preventDefault();
    
    let arreglo=[];
    let modificador=2;
    let camposValidados=[];
     let inputNombre=document.getElementById("full_name");
    let inputtel=document.getElementById("tel");
     let aciertos=[];
     let inputEmail=document.getElementById("email");
     let inputSeleccion=document.getElementById("inputState");
     let inputCity=document.getElementById("city");
     let inputCalle=document.getElementById("inputAddress");
     let inputZip=document.getElementById("inputZip");
     let inputNumExt=document.getElementById("Num-ext");
     let inputNumInt=document.getElementById("Num-int");
     let inputCategory=document.getElementById("Category");
     console.log("Categoria");
     
     let contrasena=document.getElementById("inputPassword");
     let file=document.getElementById("formFile");
     let confirmacionContrasena=document.getElementById("inputPasswordConfirm");
     let inputDescripcion=document.getElementById("Descripcion");
     let inputSub=document.getElementById("Subcategory");
     console.log(inputNombre.value);
    
    // /*if(inputNombre.value.length>0){
        
    //     mensajeValidacion(true,"Valido",inputNombre,0);
    // }
    // else{
    //     mensajeValidacion(false,"El nombre no debe estar vacio",inputNombre,0);
    // }*/
     aciertos.push( mensajeValidacion(validarLetras(inputNombre.value),inputNombre,0));
     aciertos.push( mensajeValidacion(validarEmail(inputEmail.value),inputEmail,1));
     aciertos.push(mensajeValidacion(validarTelefono(inputtel.value),inputtel,2));
     console.log(inputSeleccion.value);
    
        aciertos.push(mensajeValidacion(validarSeleccion(inputSeleccion.value),inputSeleccion,3));
     
     aciertos.push(mensajeValidacion(validarLetras(inputCity.value),inputCity,4));
     aciertos.push( mensajeValidacion(validarLetras(inputCalle.value),inputCalle,5));
     aciertos.push(mensajeValidacion(validarZip(inputZip.value),inputZip,6));
     aciertos.push(mensajeValidacion(validarNum(inputNumExt.value),inputNumExt,7));
     aciertos.push(mensajeValidacion(validarNum(inputNumInt.value),inputNumInt,8));
     if(myStorage.Bandera==='true'){
        aciertos.push(mensajeValidacion(validarSeleccion(inputCategory.value),inputCategory,9));
        modificador=0;
        for(let i=0;i<inputSub.options.length;i++){
            if(inputSub.options[i].selected===true){
                console.log(inputSub.options[i]);
                arreglo.push(inputSub.options[i].value);
            }
        }
     }
         aciertos.push(mensajeValidacion(validaContrasena(contrasena.value),contrasena,11-modificador));
     
    aciertos.push(mensajeValidacion(confirmaContrasena(confirmacionContrasena.value,contrasena.value,validaContrasena(confirmacionContrasena.value)),confirmacionContrasena,12-modificador));
     let imagen=document.querySelector("form");
     aciertos.push(mensajeValidacion(validarDescripcion(inputDescripcion.value),inputDescripcion,14-modificador));
     console.log("VAB",file.files[0]);
     aciertos.push( mensajeValidacion(validarImagen(file.value),file,13-modificador));
     console.log(aciertos);
     let imagenesa=document.getElementById("Imagenesa");
     const objetoUrl=URL.createObjectURL(file.files[0]);
     imagenesa.innerHTML+=`<img src=${objetoUrl} alt="">`;
     if(aciertos.includes(false)){
         //alert("Te equivocaste en un campo, revisa los campos de nuevo");
         construirSweetAlert("error",'Ingresaste mal un campo, regresa para checar.',"",'<a href="">Why do I have this issue?</a>');
         return;
     }
    //console.log(inputSub.options);
 
    
   
     console.log("objeto")
     console.log(objetoUrl);

     camposValidados.push(file.files[0]);
     camposValidados.push(inputNombre.value);
     camposValidados.push(0);
     camposValidados.push(inputEmail.value);
     camposValidados.push(inputCalle.value);
     camposValidados.push(inputZip.value);
     camposValidados.push(inputNumExt.value);
     camposValidados.push(inputNumInt.value);
     camposValidados.push(contrasena.value);
     camposValidados.push([]);
     camposValidados.push(0);
     camposValidados.push(inputCity.value);
     camposValidados.push(inputSeleccion.value);
     camposValidados.push(inputDescripcion.value);
     console.log("Nueva");
     //console.log(inputCategory.value);
     
     if(myStorage.Bandera==='true'){
        camposValidados.push(inputCategory.value);
        camposValidados.push(arreglo);
        saveToMyStorage(crearTrabajador(camposValidados),myStorage.Bandera);
     }
     else{
        saveToMyStorage(crearCliente(camposValidados),myStorage.Bandera);

     }
     window.location="lista_perfiles.html"; 

    }
 function recolectarMyStorage(perfil){
     let arregloTrabajadores=[];
     if(perfil==='Trabajador'){
        console.log(myStorage.getItem(perfil));
        if(myStorage.Trabajador===undefined||myStorage.Trabajador.length===0){
            myStorage.setItem(perfil,[]);
            return [];
        }
        arregloTrabajadores=JSON.parse(myStorage.Trabajador);
        return arregloTrabajadores;
    }
    else{
        console.log(myStorage.getItem(perfil));
        if(myStorage.Cliente===undefined ||myStorage.Cliente.length===0){
            myStorage.setItem(perfil,[]);
            console.log("vacios");
            return [];
        }
        arregloTrabajadores=JSON.parse(myStorage.Cliente);
        return arregloTrabajadores;
    }    
 }
 function crearCliente(camposValidados){
    let cliente={
        "img": camposValidados[0],
        "name":camposValidados[1],
        "stars":camposValidados[2],
        "email":camposValidados[3],
        "stret":camposValidados[4],
        "Zip":camposValidados[5],
        "numExt":camposValidados[6],
        "numInt":camposValidados[7],
        "contrasena":camposValidados[8],
        "workedReviews":camposValidados[9],
        "reviews":camposValidados[10],
        "municipio":camposValidados[11],
        "estado":camposValidados[12],
        "description":camposValidados[13]
        
    };
    return cliente; 
 }
function crearTrabajador(camposValidados){
    let trabajador={
        "img": camposValidados[0],
        "name":camposValidados[1],
        "stars":camposValidados[2],
        "email":camposValidados[3],
        "stret":camposValidados[4],
        "Zip":camposValidados[5],
        "numExt":camposValidados[6],
        "numInt":camposValidados[7],
        "contrasena":camposValidados[8],
        "clientReviews":camposValidados[9],
        "reviews":camposValidados[10],
        "municipio":camposValidados[11],
        "estado":camposValidados[12],
        "description":camposValidados[13],
        "category":camposValidados[14],
        "subCategories":camposValidados[15]
    };
    return trabajador;

}
function saveToMyStorage(perfil,bandera){
    if(bandera==='true'){
        let array_trabajador=recolectarMyStorage(perfil);
        console.log(array_trabajador,"1234");
        array_trabajador.push(perfil);
        myStorage.setItem("Trabajador",JSON.stringify(array_trabajador));
    }
    else{
        let array_trabajador=recolectarMyStorage(perfil);
        console.log(array_trabajador,"1234");
        array_trabajador.push(perfil);
        myStorage.setItem("Cliente",JSON.stringify(array_trabajador));
    }
}
    // imagen.innerHTML+=`<img src=${file.value}>`;



