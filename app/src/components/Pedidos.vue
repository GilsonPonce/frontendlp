<!-- Pedidos.vue -->

<template>
  <div class="pedidos">
    <h2>Lista de Pedidos</h2>
    <ul>
      <li v-for="pedido in pedidos" :key="pedido.id" class="pedido-item">
        <div class="pedido-contenido">
          <img :src="pedido.producto.imagen" alt="Imagen del Producto" class="producto-imagen">
          <div>
            <div><strong>Producto:</strong> {{ pedido.producto.title }} ({{ pedido.producto.marca }})</div>
            <div><strong>Fecha del Pedido:</strong> {{ pedido.fecha }}</div>
            <div><strong>Estado:</strong> {{ pedido.estado }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

  <script setup>
  import pedidos from '../bd/pedidos';

  console.log(pedidos);
  
  </script>
  
  <style scoped>
  .pedidos {
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
  }
  
  .pedido-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    
  }

  .pedido-contenido {
    display: flex;
    align-items: center;
    justify-content: center; 
  }

  .producto-imagen {
    max-width: 100px;
    margin-right: 10px;
  }


  </style>
  