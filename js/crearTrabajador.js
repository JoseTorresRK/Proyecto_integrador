let component=document.getElementById("tab02");


tamano=recolectarTrabajado();
console.log(tamano)

for(let i=0;i<tamano[0].length;i++){
    component.innerHTML+=plantilla(tamano[0][i],tamano[1][i]);    
}