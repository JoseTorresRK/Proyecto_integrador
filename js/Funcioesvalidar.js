function validarResenas(e){
    e.preventDefault();
    let acierto=[];
    let titulo=document.getElementById("jobTitle");
    let estado=document.getElementById("inputState");
    let ciudad=document.getElementById("city");
    
    acierto.push(mensajeValidacion(validarLetras(titulo.value),titulo,0));
    acierto.push(mensajeValidacion(validarSeleccion(estado.value),estado,2));
    acierto.push(mensajeValidacion(validarLetras(ciudad.value),ciudad,3));
   if(acierto.includes(false)){
        return
   }

        

}
function opcionesSubcategory(opcion){
    if("Albañileria"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Castillos y trabes">Castillos y trabes</option>
        <option value="Colados">Colados</option>
        <option value="Muros">Muros</option>
        <option value="Estructuras pequeñas">Estructuras pequeñas</option>
        <option value="Bardas">Bardas</option> 
        `
    }
    if("Herreria"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Muebles de jardín">Muebles de jardín</option>
        <option value="Estructuras metálicas generales">Estructuras metálicas generales</option>
        <option value="Soldadura smaw">Soldadura smaw</option>
        <option value="Soldadura con microalambre">Soldadura con microalambre</option>
        <option value="Cortadora de plasma">Cortadora de plasma</option> 
        `
    }
    if("Jardineria"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Plantas exóticas">Plantas exóticas</option>
        <option value="Arboles frutales">Arboles frutales</option>
        <option value="Bonsáis">Bonsáis</option>
        <option value="Invernaderos">Invernadores</option>
        <option value="Jardineras">Jardineras</option> 
        `
    }
    if("Plomeria"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Fregaderos">Fregaderos</option>
        <option value="Tuberías tapadas">Tuberías tapadas</option>
        <option value="Lavabos">Lavabos</option>
        <option value="Caños atascados">Caños atascados</option>
        <option value="Instalaciones sanitarias">Instalaciones sanitarias</option> 
        `
    }
    if("Carpinteria"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Muebles domésticos">Muebles domésticos</option>
        <option value="Estructuras exteriores">Estructuras exteriores</option>
        <option value="Cobertizos">Cobertizos</option>
        <option value="Barnices y pulidos">Barnices y pulidos</option>
        <option value="Juguetes en madera">Juguetes en madera</option> 
        `
    }
    if("Cocina"===opcion){
        return `<option value="">Seleccione una categoria</option>
        <option value="Comida internacional">Comida internacional</option>
        <option value="Comida casera">Comida casera</option>
        <option value="Ingredientes de primera calidad">Ingredientes de primera calidad</option>
        <option value="Ingredientes orgánicos y frescos">Ingredientes orgánicos y frescos</option>
        <option value="Platillos exóticos">Platillos exóticos</option> 
        `
    }
    
}

function validarFormTaba(e){
    e.preventDefault();
    let acierto=[];
    let arreglo=[];
    let titulo=document.getElementById("jobTitle");
    let estado=document.getElementById("inputState");
    let ciudad=document.getElementById("city");
    let inputSub=document.getElementById("Subcategory");
    for(let i=0;i<inputSub.options.length;i++){
        if(inputSub.options[i].selected===true){
            console.log(inputSub.options[i]);
            arreglo.push(inputSub.options[i].value);
        }
    }
    let area=document.getElementById("area");
    acierto.push(mensajeValidacion(validarLetras(titulo.value),titulo,0));
    acierto.push(mensajeValidacion(validarSeleccion(estado.value),estado,1));
    acierto.push(mensajeValidacion(validarLetras(ciudad.value),ciudad,2));
    //acierto.push(mensajeValidacion(validarLetras(area.value),area,4));
    if(acierto.includes(false)){
        return
    }
    else{
        console.log(myStorage.Temporal);
        console.log(myStorage.TempTrabajador);
        console.log(myStorage.TempTrabajador);
        let tempclient=JSON.parse(myStorage.Temporal);
        let temp=JSON.parse(myStorage.TempTrabajador);
        let trabajo=generar(temp.idUser,tempclient.idUser, titulo.value,estado.value,ciudad.value,arreglo,area.value);
        console.log(trabajo);
        agregaTrabajo(trabajo);
    }
}
function agregaTrabajo(arreglo){
   
    console.log(myStorage.Trabajos);
    if(myStorage.Trabajos===undefined||myStorage.Trabajos===[]||myStorage.Trabajos===""){
        myStorage.setItem("Trabajos",[]);
        let completo=[JSON.stringify(arreglo)];
        myStorage.setItem("Trabajos",completo);
        return ;
    }
    let completo=JSON.parse(myStorage.Trabajos);
    let auxiliar=[];
    console.log(completo)
    completo.push(arreglo[0]);
    
    myStorage.setItem("Trabajos",JSON.stringify(completo));
}

function generar(idUser,idCliente,nombre,estado,ubicacion,desc,valor){
    let arreglo=[{
        "idUser":idUser,
        "idCliente":idCliente,
        "nombre":nombre,
        "estado":estado,
        "ubicacion":ubicacion,
        "descripcion":desc,
        "arreglo":valor
    }];
    return arreglo;

}