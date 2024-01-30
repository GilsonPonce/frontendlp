import axios from 'axios'
import instance_axios from './axios'

export const createPersona = async(info) => {
    try{
        const response = await instance_axios.post("/personas",info)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PERSONA",error)
        throw error
    }
}

export const updatePersona = async(id, info) => {
    try{
        const response = await instance_axios.put(`/personas/${id}`,info)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PERSONA",error)
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

export const getAllPersonas = async() => {
    try{
        const response = await instance_axios.get("/personas")
        return response;
    }catch(error){
        console.warn("ERROR PETICION PERSONA",error)
        throw error
    }
}

export const getPersona = async(id) => {
    try{
        const response = await instance_axios.get(`/personas/${id}`)
        return response;
    }catch(error){
        console.warn("ERROR PETICION PERSONA",error)
        throw error
    }
}

