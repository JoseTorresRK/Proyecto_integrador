let form = document.getElementById('contact-form')

/**
 * @function – funcion que añade un boton enviar, debajo de btn submit para abrir aplicacion de correo con los detalles del cliente 
 */
function getContactDetails() {
    form.addEventListener('submit', (event)=>{
        let full_name = document.getElementById('full_name').value
        let email = form.querySelector('[name=email]').value
        let  text_area = form.querySelector('textarea').value
        form.innerHTML += `
            <a href="mailto:oscarmtz.delao@gmail.com?subject=Mail de Contacto&body=${"Remitente: " +full_name + ' Mensaje: ' + text_area +' – from:' +email}">enviar</a>
        `
        event.preventDefault()
    })
    
}

window.addEventListener('load', (event)=>{
    getContactDetails()
})
