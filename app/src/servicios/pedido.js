//actualizando servicio de pedidos
import instance_axios from './axios'

export const createPedido = async(info) => {
    try{
        const response = await instance_axios.post("/pedidos",info)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PEDIDO",error)
        throw error
    }
}

export const updatePedido = async(id, info) => {
    try{
        const response = await instance_axios.put(`/pedido/${id}`,info)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PEDIDO",error)
        throw error
    }
}

export const deletePedido = async(id) => {
    try{
        const response = await instance_axios.delete(`/pedido/${id}`)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PEDIDO",error)
        throw error
    }
}

export const getAllPedidos = async() => {
    try{
        const response = await instance_axios.get("/pedidos")
        return response;
    }catch(error){
        console.warn("ERROR PETICION PEDIDO",error)
        throw error
    }
}

export const getPedido = async(id) => {
    try{
        const response = await instance_axios.get(`/pedido/${id}`)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PEDIDO",error)
        throw error
    }
}

