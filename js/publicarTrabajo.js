let nueva=window.localStorage;
let subcat=document.getElementById("Subcategory");

let valor=JSON.parse(nueva.TempTrabajador);

console.log(valor);
console.log(valor.categories);
subcat.innerHTML=opcionesSubcategory(valor.categories);
boton=document.getElementById("send_msg");
boton.addEventListener("click",validarFormTaba);
