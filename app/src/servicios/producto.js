import instance_axios from './axios'

export const createProducto = async(info) => {
    try{
        const response = await instance_axios.post("/producto",info)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PERSONA",error)
        throw error
    }
}