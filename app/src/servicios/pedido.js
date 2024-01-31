// Importa el cliente axios personalizado configurado para tu aplicación
import instance_axios from './axios';

// Función para crear un pedido
export const createPedido = async (objeto) => {
  // Crea un objeto FormData para enviar datos como formulario multipart
  const formData = new FormData();
  // Agrega cada propiedad del objeto al FormData
  formData.append('nombre', objeto.nombre);
  formData.append('correo', objeto.correo);
  formData.append('telefono', objeto.telefono);
  formData.append('marca', objeto.marca);
  formData.append('modelo', objeto.modelo);
  formData.append('cantidad', objeto.cantidad);
  formData.append('nombreProducto', objeto.nombreProducto);
  try {
    // Realiza una petición POST al endpoint de pedidos con el FormData
    const response = await instance_axios.post("/pedidos", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.warn("ERROR PETICION PEDIDO", error);
    throw error;
  }
};

// Función para actualizar un pedido por ID
export const updatePedido = async (id, objeto) => {
  const formData = new FormData();
  formData.append('nombre', objeto.nombre);
  formData.append('correo', objeto.correo);
  formData.append('telefono', objeto.telefono);
  formData.append('marca', objeto.marca);
  formData.append('modelo', objeto.modelo);
  formData.append('cantidad', objeto.cantidad);
  formData.append('nombreProducto', objeto.nombreProducto);
  try {
    const response = await instance_axios.put(`/pedidos/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.warn("ERROR PETICION PEDIDO", error);
    throw error;
  }
};

// Función para eliminar un pedido por ID
export const deletePedido = async (id) => {
  try {
    const response = await instance_axios.delete(`/pedidos/${id}`);
    return response;
  } catch (error) {
    console.warn("ERROR PETICION PEDIDO", error);
    throw error;
  }
};

// Función para obtener todos los pedidos
export const getAllPedidos = async () => {
  try {
    const response = await instance_axios.get("/pedidos");
    return response;
  } catch (error) {
    console.warn("ERROR PETICION PEDIDO", error);
    throw error;
  }
};

// Función para obtener un pedido por ID
export const getPedido = async (id) => {
  try {
    const response = await instance_axios.get(`/pedidos/${id}`);
    return response;
  } catch (error) {
    console.warn("ERROR PETICION PEDIDO", error);
    throw error;
  }
};
