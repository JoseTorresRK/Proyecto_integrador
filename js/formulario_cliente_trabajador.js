function crearTipoFormulario(bandera){
    console.log("no estoy ejecuando el script");
   
    const mensajeParrafo=document.querySelector(".section-title p"); 
    const inputCategoria=document.querySelectorAll(".dinamico");
    const padreRenglon=document.querySelectorAll(".row .row");
    const hijos=padreRenglon[3].childNodes;  
    const hijosub=padreRenglon[4].childNodes;
    
    console.log(padreRenglon);
    if(bandera){
        mensajeParrafo.innerText="Para ser visto por miles de personas";
    }   
    else{
        mensajeParrafo.innerText="Para buscar a los trabajadores mejor capacitados de México";
        console.log(padreRenglon[3].childNodes);
        console.log(padreRenglon[3].lastChild);
        console.log(padreRenglon[4].firstChild);
        
        hijos[2].classList.remove("offset-md-2");
        padreRenglon[2].classList.add("offset-md-3");
        padreRenglon[3].classList.remove("offset-md-2");
        padreRenglon[3]
        padreRenglon[3].removeChild(hijos[7]);
        padreRenglon[4].removeChild(hijosub[1]);
        console.log(padreRenglon[3].childNodes);
        
    }     
}
crearTipoFormulario(false);