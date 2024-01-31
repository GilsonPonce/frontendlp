<template>
 <div class="form">
  <div class="row">
    <div class="12">
      <div class="row g-3 p-3">
          <div class="col-10">
            <h4>Registro de Producto</h4>
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="marca" type="text" class="form-control" placeholder="Marca" aria-label="Marca">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="modelo" type="text" class="form-control" placeholder="Modelo" aria-label="Modelo">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="valor" type="text" class="form-control" placeholder="Valor" aria-label="Valor">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="descuento" type="text" class="form-control" placeholder="Descuento" aria-label="Descuento">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="nombre" type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="pais" type="text" class="form-control" placeholder="Pais" aria-label="Pais">
          </div>
          <div class="col-12">
            <input @change="previewFiles" class="form-control" type="file" id="formFile">
          </div>
          <div class="col-12">
            <textarea v-model="descripcion" class="form-control"  placeholder="Breve Descripcion" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="proveedor" type="text" class="form-control" placeholder="Proveedor" aria-label="Proveedor">
          </div>
          <div class="col-12 col-sm-6">
            <input v-model="cantidad" type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" @click="send">{{ oid  && oid.length > 0 ? 'Actualizar' : 'Guardar' }}</button>
          </div>
      </div> 
      <div class="2">
        <img :src="imagenpath" alt="" class="rounded mx-auto d-block">
      </div>  
    </div>
  </div>
 </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { createProducto, updateProducto, getProducto } from '../servicios/producto';
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';

const route = useRoute();
const oid = ref(null);
const marca = ref("");
const modelo = ref("");
const valor = ref("");
const descuento = ref("");
const nombre = ref("");
const pais = ref("");
const descripcion = ref("");
const proveedor = ref("");
const cantidad = ref("");
const imagen = ref(null);
const imagenpath = ref(null);

const previewFiles = (event) => {
  imagen.value = event.target.files[0];
}

const setInfo = (info) => {
  oid.value = info._id.$oid
  marca.value = info.marca 
  modelo.value = info.modelo 
  valor.value = info.valor 
  descuento.value = info.descuento 
  nombre.value = info.nombre 
  pais.value = info.pais 
  descripcion.value = info.descripcion 
  proveedor.value = info.proveedor 
  cantidad.value = info.cantidad 
  imagenpath.value = import.meta.env.VITE_URL_BACKEND + info.imagen_path
}

const send = async () => {
  const objeto = {
    marca: marca.value,
    modelo: modelo.value,
    valor: valor.value,
    descuento: descuento.value,
    nombre: nombre.value,
    pais: pais.value,
    descripcion: descripcion.value,
    proveedor: proveedor.value,
    cantidad: cantidad.value,
    imagen: imagen.value
  }

  let respuesta = null

  if(oid.value && oid.value.length > 0){
    respuesta = await createProducto(objeto)
  }else{
    respuesta = await updateProducto(oid.value,objeto)
  }
  
  if(respuesta && respuesta.status === 200){
    if(respuesta.data.mensaje){
      Swal.fire({
        title: 'Error',
        text: respuesta.data.mensaje,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }else{
      setInfo(respuesta.data);
    }
    Swal.fire({
      title: 'Exelente',
      text: 'Producto Registrado Exitosamente',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
      
}

onMounted(async ()=>{
  const id = route.params.id;
  try{
      if(id){
        const res = await getProducto(id)
        if(res && res.status === 200){
          oid.value = id
          setInfo(res.data);
        }
      }
  }catch(error){
    console.warn(error)
  }
})

</script>
<style scope>
.form{
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(238, 238, 238);
}
</style>
