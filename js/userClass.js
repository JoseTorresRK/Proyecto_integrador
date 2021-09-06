
function loadApi(){
    let usuariosTrabajadores;
    let usuariosClientes;
    let ubicacionesDeUsers = [];
    fetch('http://localhost:8080/api/users/')
        .then(response=>response.json())
        .then(data=>{
            usuariosTrabajadores = data.filter( (worker)=> worker.tipo===1);
            usuariosClientes = data.filter( (client)=> client.tipo===0 );
        })
    fetch('http://localhost:8080/api/ubicacion/')
        .then(response=>response.json())
        .then(data=>{
            ubicacionesDeUsers =data.map( (ubicacion)=> ubicacion)

        })
}
/** @class User creates a new user whether is employee or user*/ 
class User {
    /**
     * 
     * @param {number} idUser is the unique number of identification
     * @param {boolean} isEmployee is a bolean flag to know if an instance of class is employee or client with default set to false if value set to 0 or falsy
     * @param {string} name the name of the user set it's name to upper case 
     * @param {string} email is the email of the user and set it's email to lower case
     * @param {string} profileImg user's profile image with default image to muted profile image if value set to 0 or falsy
     * @param {string} municipal_delegation user associated to a town
     * @param {string} state  user associated to a city
     */
    constructor(idUser, isEmployee , name, email,
     municipal_delegation, state,zip,stret,numExt,numInt,description, profileImg="./../images/profile_mute.png"){
        this.idUser = idUser;
        this.isEmployee = isEmployee;
        this.name = name.toUpperCase();
        this.email = email.toLowerCase();
        this.profileImg = profileImg; //if 
        this.municipal_delegation = municipal_delegation;
        this.state = state;
        this.zip=zip;
        this.stret=stret;
        this.numExt=numExt;
        this.numInt=numInt;
        this.description=description;

        /**
         * properties not requested by instance of class
         */
        this.clientReviews = [];
        this.categories = [];
        this.subcategories = [];
        this.stars = 0;
    }

    /**
     * getClientReviews
     * @returns {object} returns a set of objects within an array
     */
    getClientReviews(){
        return this.clientReviews;
    }

    /**
     * getCategories
     * @returns {object} returns a set of objetcs within an array
     */
    getCategories(){
        return this.categories;
    }

    /**
     * getSubcategories
     * @returns {object} returns a set of objects within an array
     */
    getSubcategories(){
        return this.subcategories;
    }

    /**
     * getStars
     * @returns {number} returns a number of stars accumulated by the user
     */
    getStars(){
        if(this.clientReviews.length > 0){
            this.setStars();
        }
        return this.stars;
    }

    /**
     * getTotalReviews
     * @returns {number} returns the number of reviews done by the client
     */
    getTotalReviews(){
        return this.clientReviews.length;
    }
     /**
      * 
      * @param {number} idOfClient retrieves the client's id
      * @param {string} nameOfClient retrives the client's name
      * @param {number} starsOfJob floating number of the score from 0 to 5 to show the performance of the job done
      * @param {string} commentOfClient set of characters from the client's opinion from the job done by the employee
      */
    setClientReviews(idOfClient, nameOfClient, starsOfJob, commentOfClient){
        this.clientReviews.push(
            { 
                clientId: idOfClient, 
                clientName: nameOfClient,
                starsForJob: starsOfJob, 
                comment: commentOfClient 
            }
        )
    }
    /**
     * @param {array} can have infinite number of categories an they will be added to this.categories array as a string
     */
    setCategories(arrayOfCategories){
        arrayOfCategories.forEach( (category)=>{
            this.categories.push(category);
        } )
        this.isEmployee = true;
    }

    /**
     * setSubcategories
     * @param {array} can have infinite number of subcategories an they will be added to this.subcategories array as a string
     */
    setSubcategories(arrayOfSubCategories){
        arrayOfSubCategories.forEach( (subcategory)=>{
            this.subcategories.push( subcategory );
        } )
    }

    /**
     * setStars
     * modify the number of stars depending on the number of client reviews 
     */
    setStars(){

        if(this.clientReviews.length >= 0 ){
            this.clientReviews.forEach((element)=>{
                this.stars += element.starsForJob;
            })
            this.stars /=this.getTotalReviews();
        }
        
    }
}


let clientReviews = [
    { idcliente: 1,clientName: "Angel", starsForJob: 5, comment: "Excelentes trabajo, limpiza única, excelente trato y profesionalidad"},
    { idcliente: 2,clientName: "Ana Flores", starsForJob: 5, comment: "Gran imaginación, tiene su herramienta profesional, es genial en lo que hace, recomendado al cien"},
    { idcliente: 3,clientName: "Xavier", starsForJob: 4, comment: "Excelente trabajo, ha hecho un trabajo limpio, confiable y atendiendo puntual a las fechas de entrega"},
    { idcliente: 4,clientName: "Sofia", starsForJob: 4, comment: "Gran imaginación, tiene su herramienta profesional, es genial en lo que hace, recomendado al cien"},
    { idcliente: 5,clientName: "Andrea", starsForJob: 5, comment: "Excelente trato, profesional, tiempo record de entrega"}
]
async function apiUsersToLocal(){
    let usuariosTrabajadores;
    let usuariosClientes;
    let ubicacionesDeUsers = [];
    await fetch('http://localhost:8080/api/users/')
        .then(response=>response.json())
        .then(data=>{
           usuariosTrabajadores = data.filter( (worker)=> worker.tipo===1);
           usuariosClientes = data.filter( (client)=> client.tipo===0 );
        })
    await fetch('http://localhost:8080/api/ubicacion/')
        .then(response=>response.json())
        .then(data=>{
            ubicacionesDeUsers =data.map( (ubicacion)=> ubicacion)

        })

    
    //console.log( "Usuarios clientes: ", usuariosClientes )
    window.localStorage.setItem("Trabajadores", setUsers(usuariosTrabajadores,ubicacionesDeUsers)) 
    window.localStorage.setItem("Clientes", setUsers(usuariosClientes,ubicacionesDeUsers))

    
}

function setMunicipio(ubicacionIdUser, arregloUbicaciones){
    let municipioFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                municipioFiltrado = ubicacion.municipio;
            }
        }
    )
    return municipioFiltrado
}

function setState(ubicacionIdUser, arregloUbicaciones){
    let estadoFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                estadoFiltrado = ubicacion.estado;
            }
        }
    )
    return estadoFiltrado
}

function setZip(ubicacionIdUser, arregloUbicaciones){
    let codigoPostalFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                codigoPostalFiltrado = ubicacion.codigopostal;
            }
        }
    )
    return codigoPostalFiltrado
}

function setStret(ubicacionIdUser, arregloUbicaciones){
    let calleFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                calleFiltrado = ubicacion.calle;
            }
        }
    )
    return calleFiltrado
}

function setNumExt(ubicacionIdUser, arregloUbicaciones){
    let numeroExtFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                numeroExtFiltrado = ubicacion.numeroext;
            }
        }
    )
    return numeroExtFiltrado
}


function setNumInt(ubicacionIdUser, arregloUbicaciones){
    let numeroIntFiltrado
    arregloUbicaciones.forEach(
        (ubicacion)=> {
            if(ubicacionIdUser === ubicacion.idubicacion ){
                numeroIntFiltrado = ubicacion.numeroint;
            }
        }
    )
    return numeroIntFiltrado
}

function setUsers(arreglodeUsers, arregloUbicacion){
    let usersConFormatoClassUser = []
    arreglodeUsers.forEach(
        (user)=>{
            let usuario;
            if(user.tipo===1){
                usuario = new User(user.idusuarios,true, user.nombre,user.email,setMunicipio(user.idubicacion,arregloUbicacion),setState(user.idubicacion,arregloUbicacion), setZip(user.idubicacion,arregloUbicacion), setStret(user.idubicacion,arregloUbicacion), setNumExt(user.idubicacion,arregloUbicacion),setNumInt(user.idubicacion,arregloUbicacion), user.descripcionusuario,user.imgperfil)
                usuario.setCategories(user.categoria.split('*'))
                usuario.setSubcategories(user.subcategoria.split('*'))
                clientReviews.forEach(
                    resena=>{
                        usuario.setClientReviews(resena.idcliente, resena.clientName, resena.starsForJob, resena.comment);
                    }
                )
            }else if(user.tipo===0){
                usuario = new User(user.idusuarios,false, user.nombre,user.email,setMunicipio(user.idubicacion,arregloUbicacion),setState(user.idubicacion,arregloUbicacion), setZip(user.idubicacion,arregloUbicacion), setStret(user.idubicacion,arregloUbicacion), setNumExt(user.idubicacion,arregloUbicacion),setNumInt(user.idubicacion,arregloUbicacion), user.descripcionusuario,user.imgperfil)
                clientReviews.forEach(
                    resena=>{
                        usuario.setClientReviews(resena.idcliente, resena.clientName, resena.starsForJob, resena.comment);
                    }
                )
            }
            usersConFormatoClassUser.push(usuario);
        }
    )

    return JSON.stringify(usersConFormatoClassUser);

}

apiUsersToLocal();
window.addEventListener('load', (event)=>{
    
    // setUsers(usuariosTrabajadores,ubicacionesDeUsers)
    // setUsers(usuariosClientes,ubicacionesDeUsers)
})