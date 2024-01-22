<template>
  <div class="card" style="width: 18rem;">
    <img :src="producto.imagen" class="card-img-top imgcard" :alt="producto.title">
    <div class="card-body">
      <h5 class="card-title">{{ producto.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${{ producto.valor }}</h6>
      <p class="card-text">{{ producto.descripcion }}</p>
      <span class="badge text-bg-success me-1" v-if="producto.marca">Marca: {{ producto.marca }}</span>
      <span class="badge text-bg-light" v-if="producto.modelo">Modelo: {{ producto.modelo }}</span>
      <span class="badge text-bg-secondary" v-if="producto.pais">Pais: {{ producto.pais }}</span>
      <br>
      <a href="#" class="btn btn-primary btn-sm mt-3">Ver</a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['producto'])
</script>
<style scoped>
.imgcard{
  max-width: 300px;
}

.card{
  margin: 0 auto;
}
</style>