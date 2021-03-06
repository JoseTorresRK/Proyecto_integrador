let form = document.getElementById('contact-form');
const myStorage = window.localStorage;
myStorage.setItem("cliente_Contacto", JSON.stringify([])) //=> {clients: "[]"}


/**
 * 
 * @param {objeto} client es el cliente y todos sus datos del formulario en un objeto
 */
function saveToMyStorage(client){
    let array_clients  = JSON.parse(myStorage.clients) //=> [] es un arreglo vacio o con los clientes en el localStorage
    array_clients.push(client) //[{full_name: 'Pedro', ...}] agrega un nuevo cliente al local storage
    myStorage.setItem("cliente_Contacto", JSON.stringify(array_clients)) //=> clients: "[{\"full_name\":\"Oscar Martínez\", ...}]" => agrega un elemento al obj de localStorage y lo convierte a JSON
}


/**
 * 
 * @param  {...any} args un arreglo de inputs para limpiar el formulario despues de enviar a localStorage los datos del cliente
 */
const clearInputs = (...args)=>{
    args.forEach((input) =>{
        input.value = "";
    })
}

/**
 * @function – funcion que añade un boton enviar, debajo de btn submit para abrir aplicacion de correo con los detalles del cliente 
 */
function getContactDetails() {
    form.addEventListener('submit', (event)=>{

        Swal.fire('Any fool can use a computer')
        let full_name = document.getElementById('full_name').value;
        let email = form.querySelector('[name=email]').value;
        let phone_number = form.querySelector('[name=phone]').value;
        let  text_area = form.querySelector('textarea').value;
        const formInputs = form.querySelectorAll('input'); 
        // form.innerHTML += `
        //     <a href="mailto:oscarmtz.delao@gmail.com?subject=Mail de Contacto&body=${"Remitente: " +full_name + ' Mensaje: ' + text_area +' – from:' +email}">enviar</a>
        // `;
        let potential_client = {
            "full_name" : full_name,
            "email" : email,
            "phone_number" : phone_number,
            "message" : text_area
        }
        saveToMyStorage(potential_client);
        Swal.fire('Any fool can use a computer')
        //clearInputs(formInputs);
        event.preventDefault();
    });

    
};

window.addEventListener('load', (event)=>{
    myStorage.setItem("cliente_Contacto", JSON.stringify([])) //=> {clients: "[]"}

    getContactDetails();
});
