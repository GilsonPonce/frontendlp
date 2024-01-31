

export const validar_form = (info) => {
    const { nombre, correo, telefono, marca, modelo, cantidad, nombreProducto } = info;
    if(!nombre.length > 0){
        throw "El nombre es obligatorio";
    }
    if(!correo.length > 0){
        throw "El correo es obligatorio";
    }
    if(!telefono.length > 0){
        throw "El telefono es obligatorio"
    }
    if(!marca.length > 0){
        throw "La marca es obligatoria"
    }

    if(!modelo.length > 0){
        throw "El modelo es obligatorio"
    }
    if(!cantidad.length > 0){
        throw "La cantidad es obligatoria"
    }
    if(!nombreProducto.length > 0){
        throw "El nombre del producto es obligatorio"
    }

    return true
}