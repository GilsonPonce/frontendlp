

export const validar_form = (info) => {
    const { nombre, telefono, correo, es_cliente, es_proveedor, password } = info;
    if(!nombre.length > 0){
        throw "El nombre es obligatorio";
    }
    if(!telefono.length > 0){
        throw "El telefono es obligatorio";
    }
    if(!correo.length > 0){
        throw "El correo es obligatorio"
    }
    if(!(es_cliente || es_proveedor)){
        throw "Debe chequear algun tipo Cliente o Proveedor"
    }
    if(password.length < 8){
        throw "La contraseña debe tener al menos 8 caracteres"
    }
    return true
}