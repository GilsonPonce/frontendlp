<template>
<div class="conteiner">
    <div class="row">
        <div class="col-12">
            <div class="d-flex flex-row mb-3 justify-content-between">
                <div class="p-2"><strong>Panel Persona</strong></div>
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
                    <th scope="col">Telefono</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persona in data">
                    <td>{{ persona.nombre }}</td>
                    <td>{{ persona.telefono }}</td>
                    <td>
                        <span class="badge text-bg-primary" v-if="persona.es_cliente">Cliente</span>
                        <span class="badge text-bg-warning" v-else>Proveedor</span>
                    </td>
                    <td>{{ persona.correo }}</td>
                    <td>
                        <button type="button" class="btn btn-success" @click="editar(persona._id.$oid)"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                            Editar
                        </button>
                        <button type="button" class="btn btn-danger ms-1" @click="eliminar(persona._id.$oid)"
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
import { getAllPersonas, deletePersona } from '../servicios/persona';
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const data = ref([])
const router = useRouter()

const agregar = () => {
    router.push({name:'Usuario'})
}

const editar = (id) => {
    router.push({
        name: 'Usuario',
        params: { id: id },
    })
}

const getAll = async () => {
    try{
        const response = await getAllPersonas();
        if(response && response.status === 200){
            data.value = response.data
        }
    }catch(error){
        console.warn(error);
    }
}

const eliminar = async (id) => {
    try{
        const response = await deletePersona(id);
        if(response && response.status === 200){
            Swal.fire({
                title: 'Exelente',
                text: 'Persona ELiminada Existosamente',
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