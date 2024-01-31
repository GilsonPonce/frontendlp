<template>
    <button class="btn btn-primary btn-sm mt-3" @click="handleAlertClick">Ver Detalles</button>
</template>

<script setup>
const props = defineProps(['producto']);
</script>

<script>
import Swal from 'sweetalert2'

export default {
    methods:{
        handleAlertClick(){
            // Create a variable to store the HTML content
            const htmlContent = `
                <p>Producto: ${this.producto.nombre}</p>
                <p>Marca: ${this.producto.marca}</p>
                <p>Modelo: ${this.producto.modelo}</p>
                <p>Pais: ${this.producto.pais}</p>
                <p>Descripion: ${this.producto.descripcion}</p>
            `;
            
            // Use the created HTML content in SweetAlert2
            Swal.fire({
                title: "Detalles del Producto",
                html: htmlContent,
                imageUrl: "/src/assets/refrigerador.jpeg",
                imageWidth: '400px',
                imageAlt: 'Producto'
            });
        }
    }
}
</script>
