const email=document.getElementById("email");
console.log(email);
console.log(email.value);
const password=document.getElementById("inputPassword");
console.log(password);
const boton=document.getElementById("registro");
boton.addEventListener("submit",function(e){
    e.preventDefault();
    compararPerfil(email.value,password.value)});
