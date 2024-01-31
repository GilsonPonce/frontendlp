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
                <h1>${this.producto.nombre}</h1>
                <p>Marca: ${this.producto.marca}</p>
                <p>Modelo: ${this.producto.modelo}</p>
                <p>Valor: ${this.producto.valor}</p>
                <p>Descuento: ${this.producto.descuento}</p>
                <p>Pais: ${this.producto.pais}</p>
                <p>Proveedor: ${this.producto.proveedor}</p>
                <p>Cantidad Disponible: ${this.producto.cantidad}</p>
                <p>Descripion: ${this.producto.descripcion}</p>
            `;

            const imgPath = '${this.producto.imagen_path}';
            
            // Use the created HTML content in SweetAlert2
            Swal.fire({
                html: htmlContent,
                imageUrl: imgPath,
                imageWidth: '400px',
                imageAlt: 'Producto'
            });
        }
    }
}
</script>
