let validacion=document.getElementById("contact-form");
console.log("activae");
function mensajeValidacion(tipoMensaje,mensaje,input,campo){
    let validar=document.querySelectorAll("#contact-form div .position-relative");
    if(tipoMensaje){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        console.log(validar);
        validar[campo].removeChild(validar[campo].lastElementChild);
        console.log(validar);
        validar[campo].innerHTML+=`<div class="valid-tooltip">Campo valido</div>`;
    }
    else{
        input.classList.add("is-invalid");
        validar[campo].removeChild(validar[campo].lastElementChild);
        validar[campo].innerHTML+=`<div class="invalid-tooltip">${mensaje}</div>`;
    }

}

function validarFormulario(e){
    console.log("entre");
    e.preventDefault();
    let inputNombre=document.getElementById("full_name");
    let inputtel=document.getElementById("tel");
    let aciertos=document.getElementsByClassName("valid-tooltip");
    let inputEmail=document.getElementById("email");
    console.log(inputNombre.value);
    
    if(inputNombre.value.length>0){
        
        mensajeValidacion(true,"Valido",inputNombre,0);
    }
    else{
        mensajeValidacion(false,"El nombre no debe estar vacio",inputNombre,0);
    }
    console.log(typeof(inputtel.value));
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
    }
    
}
validacion.addEventListener('submit',validarFormulario);
