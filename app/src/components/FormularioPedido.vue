<template>
  <div class="row g-3 p-3 form">
    <div class="col-12">
      <h4>Registro de Pedido</h4>
    </div>
    <div class="col-12">
      <input type="text" v-model="nombre" class="form-control" placeholder="Nombre" aria-label="Nombre" />
    </div>
    <div class="col-12">
      <input type="email" v-model="correo" class="form-control" placeholder="Correo" aria-label="Correo" />
    </div>
    <div class="col-12">
      <input type="text" v-model="telefono" class="form-control" placeholder="Telefono" aria-label="Telefono" />
    </div>
    <div class="col-12">
      <input type="text" v-model="marca" class="form-control" placeholder="Marca" aria-label="Marca" />
    </div>

    <div class="col-12">
      <input type="text" v-model="modelo" class="form-control" placeholder="Modelo" aria-label="Modelo" />
    </div>

    <div class="col-12">
      <input type="text" v-model="cantidad" class="form-control" placeholder="Cantidad" aria-label="Cantidad" />
    </div>

    <div class="col-12">
      <input
        type="text"
        v-model="nombreProducto"
        class="form-control"
        placeholder="Nombre del Producto"
        aria-label="Nombre del Producto"
      />
    </div>

    <div class="col-12">
      <button type="submit" class="btn btn-primary" @click="enviar">{{ oid && oid.length > 0 ? "Actualizar" : "Guardar" }}</button>
      <button type="submit" class="btn btn-warning ms-2" @click="cancelar">Volver</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { createPedido, getPedido, updatePedido } from '../servicios/pedido';
import { validar_form } from '../helpers/pedido';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';
import router from '../router/router';

const route = useRoute();

const oid = ref(null);
const nombre = ref("");
const correo = ref("");
const telefono = ref("");
const marca = ref("");
const modelo = ref("");
const cantidad = ref("");
const nombreProducto = ref("");

const setearValores = (pedido) => {
  console.log(pedido);
  if (!pedido) {
    return;
  }
  nombre.value = pedido.nombre;
  correo.value = pedido.correo;
  telefono.value = pedido.telefono;
  marca.value = pedido.marca;
  modelo.value = pedido.modelo;
  cantidad.value = pedido.cantidad;
  nombreProducto.value = pedido.nombreProducto;
};

const enviar = async () => {
  const info = {
    correo: correo.value,
    nombre: nombre.value,
    telefono: telefono.value,
    marca: marca.value,
    modelo: modelo.value,
    cantidad: cantidad.value,
    nombreProducto: nombreProducto.value,
  };

  try {
    const valido = validar_form(info);
    if (valido) {
      let respuesta = null;
      if (oid.value && oid.value.length > 0) {
        respuesta = await updatePedido(oid.value, info);
      } else {
        respuesta = await createPedido(info);
      }
      if (respuesta && respuesta.status === 200) {
        if (respuesta.data.mensaje) {
          Swal.fire({
            title: 'Ojo !',
            text: respuesta.data.mensaje,
            icon: 'warning',
            confirmButtonText: 'Cool',
          });
          return;
        }
        Swal.fire({
          title: 'Exelente',
          text: 'Pedido Registrado Exitosamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    }
  } catch (er) {
    Swal.fire({
      title: 'Ojo!',
      text: er,
      icon: 'warning',
      confirmButtonText: 'Cool',
    });
    console.warn(er);
  }
};

const cancelar = () => {
  router.push({
    name: 'Pedido',
  });
};

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    const res = await getPedido(id);
    if (res && res.status === 200) {
      oid.value = id;
      setearValores(res.data);
    }
  }
});
</script>

<style scoped>
.form {
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgb(238, 238, 238);
}
</style>
