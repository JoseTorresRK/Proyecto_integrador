function cambioimagen(elemento,oficios){
    
    elemento.innerHTML=`<img src="images/${oficios[indice]}" class="img-responsive cambio-feature" alt="Thin Laptop"></img>`;
    (indice<oficios.length-1)?indice++:indice=0;
    console.log(oficios[indice])
}
let animacion=document.getElementById("Cambio-Imagen");
let indice=1;
let arreglo=["albañil.jpg","carpintero.jpg","cocinera.jpg","jardinera.jpg","plomera.jpg","1herreros.jpg"];
setInterval(cambioimagen,10000,animacion,arreglo);
