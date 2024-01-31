import instance_axios from './axios'

export const createProducto = async(objeto) => {
  const formData = new FormData();
  formData.append('marca', objeto.marca);
  formData.append('modelo', objeto.modelo);
  formData.append('valor', objeto.valor);
  formData.append('descuento', objeto.descuento);
  formData.append('nombre', objeto.nombre);
  formData.append('pais', objeto.pais);
  formData.append('descripcion', objeto.descripcion);
  formData.append('proveedor', objeto.proveedor);
  formData.append('cantidad', objeto.cantidad);
  if (objeto.imagen) {
    formData.append('imagen', objeto.imagen);
  }
  try{
      const response = await instance_axios.post("/producto",formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response;
  }catch(error){
      console.warn("ERROR PETICION PRODUCTO",error)
      throw error
  }
}

export const updateProducto = async(id, objeto) => {
  const formData = new FormData();
  formData.append('marca', objeto.marca);
  formData.append('modelo', objeto.modelo);
  formData.append('valor', objeto.valor);
  formData.append('descuento', objeto.descuento);
  formData.append('nombre', objeto.nombre);
  formData.append('pais', objeto.pais);
  formData.append('descripcion', objeto.descripcion);
  formData.append('proveedor', objeto.proveedor);
  formData.append('cantidad', objeto.cantidad);
  if (objeto.imagen) {
    formData.append('imagen', objeto.imagen);
  }
  try{
      const response = await instance_axios.put(`/producto/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response;
  }catch(error){
      console.warn("ERROR PETICION PRODUCTO",error)
      throw error
  }
}

export const deletePersona = async(id) => {
  try{
      const response = await instance_axios.delete(`/personas/${id}`)
      return response;
  }catch(error){
      console.warn("ERROR PETICION PERSONA",error)
      throw error
  }
}

export const getAllProductos = async() => {
  try{
      const response = await instance_axios.get("/producto")
      return response;
  }catch(error){
      console.warn("ERROR PETICION PRODUCTO",error)
      throw error
  }
}

export const getProducto = async(id) => {
  try{
      const response = await instance_axios.get(`/producto/${id}`)
      return response;
  }catch(error){
      console.warn("ERROR PETICION PRODUCTO",error)
      throw error
  }
}

