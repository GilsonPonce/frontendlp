<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">StoreEc</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/formproducto" class="nav-link">Agregar Producto</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </template>
  
  <script setup>
  import { onMounted, watch, watchEffect, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router'
 
  </script>
  
  <style scoped>
  .navbar{
    background-color: #009485;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 1rem;
  }
  .router-link-active{
    background-color: #00a998;
    border-radius: 10px;
  }
  </style>