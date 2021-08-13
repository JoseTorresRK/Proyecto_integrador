const selectElement=document.querySelector("#Category");
selectElement.addEventListener('change',(event)=>{
    const subcategoria=document.querySelector("#Subcategory");
    subcategoria.innerHTML=opcionesSubcategory(selectElement.value);
});

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
