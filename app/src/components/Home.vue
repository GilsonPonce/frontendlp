<script setup>
import CardProducto from './CardProducto.vue';
import Pagination from './Pagination.vue';
import producto from '../bd/productos';

const productos = () => {
  let productos_collection = []
  for(let i = 0; i < 10; i++){
    productos_collection.push(producto);
  }
  return productos_collection;
}

</script>

<template>
<div class="text-left pt-3 home">
  <div class="row g-4">
    <div class="col-12 col-sm-3" v-for="producto in productos()">
      <CardProducto :producto="producto" class="text-start"/>
    </div>
  </div>
  <div class="row pt-3">
    <div class="col">
      <Pagination />
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
