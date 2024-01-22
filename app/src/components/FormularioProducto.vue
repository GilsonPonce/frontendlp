<template>
 <div class="row g-3 p-3 form">
  <div class="col-12">
    <h4>Registro de Producto</h4>
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Marca" aria-label="Marca">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Modelo" aria-label="Modelo">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Valor" aria-label="Valor">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Descuento" aria-label="Descuento">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Pais" aria-label="Pais">
  </div>
  <div class="col-12">
    <input class="form-control" type="file" id="formFile">
  </div>
  <div class="col-12">
    <textarea class="form-control"  placeholder="Breve Descripcion" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Proveedor" aria-label="Proveedor">
  </div>
  <div class="col-12 col-sm-6">
    <input type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Guardar</button>
  </div>
</div>   
</template>
<style scope>
.form{
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(238, 238, 238);
}
</style>
