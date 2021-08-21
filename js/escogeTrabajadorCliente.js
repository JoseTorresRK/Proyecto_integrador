
    const perfil=document.querySelectorAll("#navbarNav  .dropdown-item ");
    const mylocal=window.localStorage;
    const paginaActual=document.getElementsByTagName("title")[0].childNodes[0];
    console.log(perfil);
    console.log(paginaActual)
    perfil[0].onclick=function(){
        mylocal.setItem("Bandera",[true]);
        definirPagina(paginaActual.baseURI)
    }   
    perfil[1].onclick=function(){
        mylocal.setItem("Bandera",[false]);
        definirPagina(paginaActual.baseURI)
    }
function definirPagina(paginaActual){
    console.log(typeof(paginaActual));
    if(paginaActual.includes("index.html")){
        window.location="./html/formulario.html";
    }
    else{
        window.location="./formulario.html";
    }
}