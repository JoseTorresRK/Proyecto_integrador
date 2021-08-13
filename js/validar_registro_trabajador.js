let validacion=document.getElementById("contact-form");
console.log("activae");
function mensajeValidacion(tipoMensaje,input,campo){
    let validar=document.querySelectorAll("#contact-form div .position-relative");
    if(tipoMensaje==true){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        validar[campo].removeChild(validar[campo].lastElementChild);
        console.log(validar);
        validar[campo].innerHTML+=`<div class="valid-tooltip">Campo valido</div>`;
    }
    else{
        console.log(campo)
        input.classList.add("is-invalid");
        validar[campo].removeChild(validar[campo].lastElementChild);
        validar[campo].innerHTML+=`<div class="invalid-tooltip">${tipoMensaje}</div>`;
    }

}
function validarNombre(nombre){
    if(nombre.length<=0){
       console.log(nombre.length);
        return "El campo no puede estar vacio";
    }
    if(!(/^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/.test(nombre))){
        return "El nombre solo puede tener letras, espacios, acentos y ¨";
    }
    return true;
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
function validarFormulario(e){
    console.log("entre");
    e.preventDefault();
    let inputNombre=document.getElementById("full_name");
    let inputtel=document.getElementById("tel");
    let aciertos=document.getElementsByClassName("valid-tooltip");
    let inputEmail=document.getElementById("email");
    console.log(inputNombre.value);
    
    /*if(inputNombre.value.length>0){
        
        mensajeValidacion(true,"Valido",inputNombre,0);
    }
    else{
        mensajeValidacion(false,"El nombre no debe estar vacio",inputNombre,0);
    }*/
    mensajeValidacion(validarNombre(inputNombre.value),inputNombre,0);
    mensajeValidacion(validarEmail(inputEmail.value),inputEmail,1);
    mensajeValidacion(validarTelefono(inputtel.value),inputtel,2);
    /*console.log(typeof(inputtel.value));
    if(inputtel.value.length===0){
        mensajeValidacion(false,"El campo no puede estar vacio.",inputtel,2);
    }
    else{
        if(/^[0-9]+$/.test(inputtel.value)){

            if(inputtel.value.length===10){
                mensajeValidacion(true,"Valido",inputtel,2);
            
            }
            else{
                mensajeValidacion(false,"El número telefonico debe ser de diez digitos",inputtel,2)
            }
        }
        else{
            mensajeValidacion(false,"Este campo solo puede tener números",inputtel,2)      
        }
    }*/
    
}
validacion.addEventListener('submit',validarFormulario);