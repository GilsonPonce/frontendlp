<template>
  <div class="card" style="width: 18rem;">
    <img :src="producto_imagen(producto)" class="card-img-top imgcard" :alt="producto.title">
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${{ producto.valor }}</h6>
      <p class="card-text">{{ producto.descripcion }}</p>
      <span class="badge text-bg-success me-1" v-if="producto.marca">Marca: {{ producto.marca }}</span>
      <span class="badge text-bg-light" v-if="producto.modelo">Modelo: {{ producto.modelo }}</span>
      <span class="badge text-bg-secondary" v-if="producto.pais">Pais: {{ producto.pais }}</span>
      <br>
      <a href="#" class="btn btn-primary btn-sm mt-3">Ver</a>
      <button class="btn btn-secondary btn-sm mt-3 ms-1" @click="editar(producto)">Editar</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['producto'])
const router = useRouter();
const producto_imagen = (producto) => {
  return import.meta.env.VITE_URL_BACKEND + producto.imagen_path
}
const editar = (producto) => {
  router.push({
    name: 'Producto',
    params:{id:producto._id.$oid}
  })
}
</script>
<style scoped>
.imgcard{
  max-width: 300px;
}

.card{
  margin: 0 auto;
}
</style>