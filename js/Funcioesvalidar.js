function validarResenas(e){
    e.preventDefault();
    let acierto=[];
    let titulo=document.getElementById("jobTitle");
    let estado=document.getElementById("inputState");
    let ciudad=document.getElementById("city");
    let area=document.getElementById("area");
    acierto.push(mensajeValidacion(validarLetras(titulo.value),titulo,0));
    acierto.push(mensajeValidacion(validarSeleccion(estado.value),estado,2));
    acierto.push(mensajeValidacion(validarLetras(ciudad.value),ciudad,3));
    acierto.push(mensajeValidacion(validarLetras(area.value),area,4));
        

}