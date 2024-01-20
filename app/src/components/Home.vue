<script setup>
import { ref } from 'vue'
import CardProducto from './CardProducto.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="container text-center pt-3">
  <div class="row">
    <div class="col-3">
      <CardProducto />
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
  height: 100%;
}
</style>
