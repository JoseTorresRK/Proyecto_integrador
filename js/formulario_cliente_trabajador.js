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
   
        hijos[3].classList.remove("offset-md-1");
        hijos[3].classList.add("offset-md-3");
        hijos[5].classList.remove("offset-md-1");
        hijos[5].classList.add("offset-md-3");
        hijosub[3].classList.add("offset-md-2");
        
        console.log(hijosub);
        padreRenglon[3].removeChild(hijos[7]);
        padreRenglon[4].removeChild(hijosub[1]);
        console.log(padreRenglon[3].childNodes);
        
    }     
}
crearTipoFormulario(false);