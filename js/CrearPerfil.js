renderPerfil(tempLocal(1008));
let botonesEditar=document.getElementsByClassName("botonicono");
botonesEditar[0].addEventListener("click",function(e){
    e.preventDefault();
    
    crearWidgetCloudinary(false)[0].open();
    
    }, false);
botonesEditar[1].addEventListener("click",function(e){
    e.preventDefault();
    cambiarDesc();
});
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
    cambiarDatos(1,mensaje,true,"Categoria");

})
botonesEditar[3].addEventListener("click",function(e){
    e.preventDefault();
    let mensaje=``    
})
