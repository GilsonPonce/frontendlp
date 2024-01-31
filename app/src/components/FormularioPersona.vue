<template>
    <div class="row g-3 p-3 form">
     <div class="col-12">
       <h4>Registro de Persona</h4>
     </div>
     <div class="col-12">
       <input type="text"  v-model="nombre" class="form-control" placeholder="Nombre" aria-label="Nombre">
     </div>
     <div class="col-12">
       <input type="email" v-model="correo"  class="form-control" placeholder="Correo" aria-label="Correo">
     </div>
     <div class="col-12">
       <input type="text"  v-model="telefono" class="form-control" placeholder="Telefono" aria-label="Telefono">
     </div>
     <div class="col-12">
       <input type="password"  v-model="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña">
     </div>
     <div class="col-12">
       <input type="password"  v-model="rep_password" class="form-control" placeholder="Repita la Contraseña" aria-label="ContraseñaRp">
     </div>
     <div class="form-check">
            <input v-model="es_cliente" value="1"  class="form-check-input" type="radio" name="es_cliente" id="es_cliente">
            <label class="form-check-label" for="es_cliente">
               Es Cliente 
            </label>
        </div>
        <div class="form-check">
            <input v-model="es_cliente"  value="0" class="form-check-input" type="radio" name="es_proveedor" id="es_proveedor">
            <label class="form-check-label" for="es_proveedor">
               Es Proveedor  
            </label>
    </div>
     <div class="col-12">
       <button type="submit" class="btn btn-primary" @click="enviar">{{ oid && oid.length > 0 ? "Actualizar" : "Guardar" }}</button>
       <button type="submit" class="btn btn-warning ms-2" @click="cancelar">Volver</button>
     </div>
   </div>   
   </template>
    <script setup>
    import { onMounted, ref } from 'vue';
    import { createPersona, getPersona, updatePersona } from '../servicios/persona';
    import { validar_form } from '../helpers/persona';
    import Swal from 'sweetalert2';
    import { useRoute, useRouter } from 'vue-router';
import router from '../router/router';
    const route = useRoute();

    const oid = ref(null);
    const nombre = ref("");
    const correo = ref("");
    const telefono = ref("");
    const es_cliente = ref("1");
    const rep_password = ref("");
    const password = ref("");

    const setearValores = (persona) => {
      console.log(persona)
      if (!persona) {
        return
      }
      nombre.value = persona.nombre
      correo.value = persona.correo
      telefono.value = persona.telefono
      es_cliente.value = persona.es_cliente ? '1' : '0'
      password.value = persona.password
      rep_password.value = persona.password
    }

    const enviar = async () => {
        const info = {
            correo: correo.value,
            nombre: nombre.value,
            telefono: telefono.value,
            es_cliente: es_cliente.value === "1",
            es_proveedor: es_cliente.value === "0",
            password: password.value
        }

        try{
            const valido = validar_form(info)
            if (valido){
                let respuesta = null;
                if(oid.value && oid.value.length > 0){
                  respuesta = await updatePersona(oid.value,info)
                }else{
                  respuesta = await createPersona(info)
                }
                if(respuesta && respuesta.status === 200){
                  if(respuesta.data.mensaje){
                    Swal.fire({
                      title: 'Ojo !',
                      text: respuesta.data.mensaje,
                      icon: 'warning',
                      confirmButtonText: 'Cool'
                    })
                    return
                  }
                  Swal.fire({
                    title: 'Exelente',
                    text: 'Persona Registrada Exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
            }
        }catch(er){
          Swal.fire({
            title: 'Ojo!',
            text: er,
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
          console.warn(er);
        }
    }

    const cancelar = () => {
      router.push({
        name: 'Persona'
      })
    }

    onMounted(async ()=>{
      const id = route.params.id;
      if(id){
        const res = await getPersona(id)
        if(res && res.status === 200){
          oid.value = id
          setearValores(res.data);
        }
      }
    })

   </script>
   <style scope>
   .form{
       max-width: 30rem;
       margin: 0 auto;
       margin-top: 20px;
       border-radius: 10px;
       background-color: rgb(238, 238, 238);
   }
   </style>
   