
campo=renderPerfil(recolectarPerfiles());
console.log(campo);
let reductor=2;
let botonesEditar=document.getElementsByClassName("botonicono");
botonesEditar[0].addEventListener("click",function(e){
    e.preventDefault();
    
    crearWidgetCloudinary(false)[0].open();
    
    }, false);
botonesEditar[1].addEventListener("click",function(e){
    e.preventDefault();
    cambiarDesc();
});
console.log(campo);
if(campo.isEmployee){
    //console.log("SSSSSSSSSSS");
    reductor=0;
    botonesEditar[2].addEventListener("click",function(e){
        e.preventDefault();
        let mensaje=`
        <strong>Selecciona tus categorias</strong>
        <div id="Categoria">
        <div class="form-check">
    
        <input class="form-check-input" type="checkbox" value="Albañileria" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        Albañilería
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Carpinteria" id="flexCheckChecked" >
        <label class="form-check-label" for="flexCheckChecked">
        Carpintería
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Cocina" id="flexCheckChecked" >
        <label class="form-check-label" for="flexCheckChecked">
        Cocina
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Herreria" id="flexCheckChecked" >
        <label class="form-check-label" for="flexCheckChecked">
        Herrería
        </label>
    </div>
    <div class="form-check">
     <input class="form-check-input" type="checkbox" value="Jardineria" id="flexCheckChecked" >
        <label class="form-check-label" for="flexCheckChecked">
        Jardinería
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Plomeria" id="flexCheckChecked" >
        <label class="form-check-label" for="flexCheckChecked">
        Plomería
        </label>
    </div>
    <div class="row" style="margin-top:3em">
    <div class="col-6">
        <button class="btn btn-success"id="formConfirmar" type="submit">Confirmar cambio</button>
    </div>
    <div class="col-6">
        <button class="btn btn-danger" id="formCancelar" type="submit">Cancelar</button>
    </div>
    </div>
    </div>` 
    ;  
        let arreglo=["Albañileria","Carpinteria","Cocina","Herreria","Jardineria","Plomeria"];
        cambiarDatos(1,mensaje,true,"Categoria",arreglo);

    })
    botonesEditar[3].addEventListener("click",function(e){
        e.preventDefault();
        let arregloCompleto;
        arreglo=["Cocina","Carpinteria","Plomeria"]
    
        crearMensaje(arreglo);
   
    
   
    cambiarDatos(2,crearMensaje(arreglo),true,"Subcategoria",["Castillos y trabes", "Colados","Muros","Estructuras Pequeñas","Bardas","Muebles de Jardín","Estructuras metálicas","Soldadura smaw","Soldadura con microalambre","Cortadora de plasma","Plantas exóticas","Árboles frutales","Bonsáis","Invernaderos","Jardineras","Fregaderos","Tuberías tapadas","Lavabos","Caños atascados","Instalaciones sanitarias","Muebles domésticos","Estructuras exteriores","Cobertizos","Barnices y pulidos","Juguetes de madera","Comida Internacional","Comida casera","Ingredientes de primera calidad","Ingredientes orgánicos y frescos","Platillos exóticos"]);
    })
}
botonesEditar[4-reductor].addEventListener("click",function(e){
    e.preventDefault();
    let mensaje=`<strong>Cambia tus datos de localidad</strong>
    <div id="Localidad">
    <div class="position-relative">

    <label for="inputState">Estado</label>
    <select  id="inputState" class="form-select is-valid" > 
      <option value="">Seleccione uno...</option>
      <option value="AGS">Aguascalientes</option>
      <option value="BC">Baja California</option>
      <option value="BCS">Baja California Sur</option>
      <option value="CAMP">Campeche</option>
      <option value="CHIS">Chiapas</option>
      <option value="CHIH">Chihuahua</option>
      <option value="CDMX">Ciudad de México</option>
      <option value="COAH">Coahuila</option>
      <option value="COL">Colima</option>
      <option value="DGO">Durango</option>
      <option value="EMEX">Estado de México</option>
      <option value="GTO">Guanajuato</option>
      <option value="GRO">Guerrero</option>
      <option value="HGO">Hidalgo</option>
      <option value="JAL">Jalisco</option>
      <option value="MICH">Michoacán</option>
      <option value="MOR">Morelos</option>
      <option value="NAY">Nayarit</option>
      <option value="NL">Nuevo León</option>
      <option value="OAX">Oaxaca</option>
      <option value="PUE">Puebla</option>
      <option value="QRO">Querétaro</option>
      <option value="QR">Quintana Roo</option>
      <option value="SLP">San Luis Potosí</option>
      <option value="SIN">Sinaloa</option>
      <option value="SON">Sonora</option>
      <option value="TAB">Tabasco</option>
      <option value="TAMP">Tamaulipas</option>
      <option value="TLAX">Tlaxcala</option>
      <option value="VER">Veracruz</option>
      <option value="YUC">Yucatán</option>
      <option value="ZAC">Zacatecas</option>
    </select>
    <div class="valid-tooltip">
    Campo válido.
  </div>
    </div>
   
  <div class="position-relative">
    <input  id="city"
         type="text"
          class="form-control formato is-valid"
         placeholder="Municipio"
         value="${campo.municipal_delegation}"
        style="margin-top:3em"
        name="city"
        required
        >
        <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
    <div class="position-relative">
            <input
            type="text"
            class="form-control formato is-valid"
            id="inputAddress"
            value="${campo.stret}"
            style="margin-top:3em"
            placeholder="Ej. Calle Hidalgo"
            
            name="inputAddress"
            />
            <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
    <div class="position-relative">
        <input type="text" style="margin-top:3em" class="form-control formato is-valid" id="inputZip" name="inputZip" value="${campo.zip}" placeholder="C.P." />
        <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
    <div class="position-relative">   
        <input type="text" style="margin-top:3em" class="form-control formato is-valid" id="Num-ext" name="Num-ext" value="${campo.numExt}" placeholder="Número Exterior" />
        <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
    <div class="position-relative"> 
        <input type="text" style="margin-top:3em"  class="form-control formato is-valid" id="Num-int" value="${campo.numInt}" placeholder="Número Interior" />
        <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
                           <div class="row" style="margin-top:3em">
                           <div class="col-6">
                             <button class="btn btn-success"id="formConfirmar" type="submit">Confirmar cambio</button>
                           </div>
                           <div class="col-6">
                             <button class="btn btn-danger" id="formCancelar" type="submit">Cancelar</button>
                           </div>
                           </div>                           
                          
    </div>`
    cambiarDatos(3-reductor,mensaje,false,"Localidad",["Castillos y trabes", "Colados","Muros","Estructuras Pequeñas","Bardas","Muebles de Jardín","Estructuras metálicas","Soldadura smaw","Soldadura con microalambre","Cortadora de plasma","Plantas exóticas","Árboles frutales","Bonsáis","Invernaderos","Jardineras","Fregaderos","Tuberías tapadas","Lavabos","Caños atascados","Instalaciones sanitarias","Muebles domésticos","Estructuras exteriores","Cobertizos","Barnices y pulidos","Juguetes de madera","Comida Internacional","Comida casera","Ingredientes de primera calidad","Ingredientes orgánicos y frescos","Platillos exóticos"]);
})
botonesEditar[5-reductor].addEventListener("click",function(e){
    e.preventDefault();
    let mensaje= `<strong>Cambia tus datos de contacto</strong>
    <div id="Contacto">
    <div class="position-relative">
    <input
        id="email"
        type="email"
        class="is-valid form-control formato"
    placeholder="Dirección de correo / email"
    name="email"
    required
    />
    <div class="valid-tooltip">
         Campo válido.
    </div>
    </div>
    <div class="position-relative">
  <input
        id="tel"
        type="tel"
        style="margin-top:3em"
        class="form-control formato is-valid"
        placeholder="Número de telefono"
        name="phone"
        required/>
        <div class="valid-tooltip">
         Campo válido.
        </div>
    </div>
        <div class="row" style="margin-top:3em">
        <div class="col-6">
          <button class="btn btn-success"id="formConfirmar" type="submit">Confirmar cambio</button>
        </div>
        <div class="col-6">
          <button class="btn btn-danger" id="formCancelar" type="submit">Cancelar</button>
        </div>
        </div>
         
    </div>`;
    cambiarDatos(4-reductor,mensaje,false,"Contacto",["Castillos y trabes", "Colados","Muros","Estructuras Pequeñas","Bardas","Muebles de Jardín","Estructuras metálicas","Soldadura smaw","Soldadura con microalambre","Cortadora de plasma","Plantas exóticas","Árboles frutales","Bonsáis","Invernaderos","Jardineras","Fregaderos","Tuberías tapadas","Lavabos","Caños atascados","Instalaciones sanitarias","Muebles domésticos","Estructuras exteriores","Cobertizos","Barnices y pulidos","Juguetes de madera","Comida Internacional","Comida casera","Ingredientes de primera calidad","Ingredientes orgánicos y frescos","Platillos exóticos"]);

})