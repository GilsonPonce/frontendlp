<template>
 <div class="row g-3 p-3 form">
  <div class="col-12">
    <h4>Registro de Producto</h4>
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="marca" type="text" class="form-control" placeholder="Marca" aria-label="Marca">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="modelo" type="text" class="form-control" placeholder="Modelo" aria-label="Modelo">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="valor" type="text" class="form-control" placeholder="Valor" aria-label="Valor">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="descuento" type="text" class="form-control" placeholder="Descuento" aria-label="Descuento">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="nombre" type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="pais" type="text" class="form-control" placeholder="Pais" aria-label="Pais">
  </div>
  <div class="col-12">
    <input @change="previewFiles" class="form-control" type="file" id="formFile">
  </div>
  <div class="col-12">
    <textarea v-model="descripcion" class="form-control"  placeholder="Breve Descripcion" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="proveedor" type="text" class="form-control" placeholder="Proveedor" aria-label="Proveedor">
  </div>
  <div class="col-12 col-sm-6">
    <input v-model="cantidad" type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Guardar</button>
  </div>
</div>   
</template>
<script setup>
import { ref } from 'vue';

const marca = ref("");
const modelo = ref("");
const valor = ref("");
const descuento = ref("");
const nombre = ref("");
const pais = ref("");
const descripcion = ref("");
const proveedor = ref("");
const cantidad = ref("");
const imagen = ref("");

const previewFiles = (event) => {
  console.log(event.target.files);
}

</script>
<style scope>
.form{
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(238, 238, 238);
}
</style>
