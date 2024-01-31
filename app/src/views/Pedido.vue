<template>
  <div class="conteiner">
      <div class="row">
          <div class="col-12">
              <div class="d-flex flex-row mb-3 justify-content-between">
                  <div class="p-2"><strong>Pedidos</strong></div>
                  <div class="p-2">
                      <button type="button" class="btn btn-primary btn-sm" @click="agregar">Agregar</button>
                  </div>
              </div>
          </div>
          <div class="col-12">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Nombre del Producto</th>
                      <th scope="col">Editar</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="pedido in data">
                      <td>{{ pedido.nombre }}</td>
                      <td>{{ pedido.correo }}</td>
                      <td>{{ pedido.telefono }}</td>
                      <td>{{ pedido.marca }}</td>
                      <td>{{ pedido.modelo }}</td>
                      <td>{{ pedido.cantidad }}</td>
                      <td>{{ pedido.nombreProducto }}</td>
                       <!--<td>
                          <span class="badge text-bg-primary" v-if="persona.es_cliente">Cliente</span>
                          <span class="badge text-bg-warning" v-else>Proveedor</span>
                      </td>
                      <td>{{ persona.correo }}</td> -->

                      <td>
                          <button type="button" class="btn btn-success" @click="editar(pedido._id.$oid)"
                                  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                              Editar
                          </button>
                          <button type="button" class="btn btn-danger ms-1" @click="eliminar(pedido._id.$oid)"
                                  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                              Eliminar
                          </button>
                          
                      </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  </template>
  <script setup>
  import { onMounted, ref } from 'vue';
  import { getAllPedidos, deletePedido} from '../servicios/pedido';
  import Swal from 'sweetalert2'
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const data = ref([])
  const router = useRouter()
  
  const agregar = () => {
      router.push({name:'Pedido'})
  }
  
  const editar = (id) => {
      router.push({
          name: 'Pedido',
          params: { id: id },
      })
  }
  
  const getAll = async () => {
      try{
          const response = await getAllPedidos();
          if(response && response.status === 200){
              data.value = response.data
          }
      }catch(error){
          console.warn(error);
      }
  }
  
  const eliminar = async (id) => {
      try{
          const response = await deletePedido(id);
          if(response && response.status === 200){
              Swal.fire({
                  title: 'Excelente',
                  text: 'Pedido ELiminado Existosamente',
                  icon: 'success',
                  confirmButtonText: 'Cool'
              })
              await getAll()
          }else{
              Swal.fire({
                  title: 'Triste',
                  text: 'Algo ocurrio, Intente de nuevo',
                  icon: 'error',
                  confirmButtonText: 'Intentar'
              })
          }
      }catch (error){
          Swal.fire({
              title: 'Error Triste',
              text: error,
              icon: 'error',
              confirmButtonText: 'OK'
          })
      }
  }
  
  onMounted(async ()=>{
      try{
         await getAll()
      }catch(error){
          console.warn(error)
      }
  })
  </script>