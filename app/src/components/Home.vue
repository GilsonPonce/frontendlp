<script setup>
import CardProducto from './CardProducto.vue';
import Pagination from './Pagination.vue';
import producto from '../bd/productos';
import { getAllProductos } from '../servicios/producto';
import { onMounted, ref } from 'vue';


const datos = ref([]);

onMounted(async ()=>{
  const respuesta = await getAllProductos();
  if(respuesta && respuesta.status === 200){
    datos.value = respuesta.data
  }
})

</script>

<template>
<div class="text-left pt-3 home">
  <div class="row g-4">
    <div class="col-12 col-sm-3 m-3" v-for="producto in datos">
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
