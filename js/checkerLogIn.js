/**
 * @function cambia el estado de la barra de navegacion dependiendo si existe un boleano en window.localStorage.loggedIn
 */
function checkerLogIn(){
    if(window.localStorage.loggedIn === "true"){
        mostrarNavBar(false,"loggedIn");
    }else if(window.localStorage.loggedIn === "false"){
        mostrarNavBar(true,"loggedOut");
    }
}


/**
 * 
 * @param {boolean} booleano Es el valor contrario del que se tiene en window.localStorage.loggedIn
 * @param {*} typeOfLog Será la clase que si se muestre dependeindo si se inicio sesion o no
 */
function mostrarNavBar(booleano, typeOfLog){
    let btns_logIn = document.querySelectorAll(".loggedIn")
    let btns_logOut = document.querySelectorAll(".loggedOut");

    if(booleano ===true){
        for( botonOut of btns_logOut ){
            botonOut.setAttribute('class', `nav-item ${typeOfLog}`)        
        }
        for (botonIn of btns_logIn){
            botonIn.setAttribute("class", "nav-item loggedIn visually-hidden");
        }
    }else if(booleano === false){
        for( botonIn of btns_logIn ){
            botonIn.setAttribute("class", `nav-item ${typeOfLog}`)
        }
        for (botonOut of btns_logOut){
            botonOut.setAttribute("class", "nav-item loggedOut visually-hidden");
        }
    }
}

const btn_cerrar_sesion = document.querySelectorAll(".loggedIn")[1]
btn_cerrar_sesion.onclick = window.localStorage.loggedIn = false;
/**
 * @function ejecuta la funcion cuando se termina de cargar toda la informacion de la pagina
 */
window.addEventListener("onload",
    checkerLogIn()
)
