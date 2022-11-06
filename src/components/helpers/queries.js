// archivo que nos sirva para hacer las consultas a la API (json-server)

const URL = 'http://localhost:4006/apirecetas/recetas';
// tipos de peticiones 
// petición GET que trae todos los productos o un producto  
// petición POST, crear un producto, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un producto

// peticion GET que trae todos los productos


// petición GET que trae todos los productos
export const consultarAPI = async() =>{
    try{

        const respuesta = await fetch (URL);
        const listaRecetas = await respuesta.json();
        // console.log(listaProductos)
        return listaRecetas
    }catch(error){
        console.log(error)
    }
}

export const creaRecetaAPI = async(producto) =>{
    try{
        const respuesta = await fetch (URL, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const borrarRecetaAPI = async(id) =>{
    try{
        const respuesta = await fetch (`${URL}/${id}`, {
            method: "DELETE", 
         
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}


export const obtenerRecetaAPI = async(id) =>{
    try{

        const respuesta = await fetch (URL+'/'+id);
        const recetaBuscada = { 
            dato: await respuesta.json(),                  
            status: respuesta.status
        }
        return recetaBuscada
    }catch(error){
        console.log(error)
    }
}

export const editarRecetaAPI = async(id, datosActualizados)=>{
    try{
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosActualizados)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

const URLusuarios = 'http://localhost:4006/apirecetas/usuarios';
// tipos de peticiones 
// petición GET que trae todos los usuarios o un usuario  
// petición POST, crear un usuario, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un usuario


// petición GET que trae todos los productos
export const consultarUsuarioAPI = async(data) =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios);
        const listaUsuarios = await respuestaUsuarios.json();
        // console.log(listaProductos)
        return listaUsuarios
    }catch(error){
        console.log(error)
    }
}

export const creaUsuarioAPI = async(usuario) =>{
    try{
        const respuestaUsuarios = await fetch (URLusuarios, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}

export const borrarUsuarioAPI = async(id) =>{
    try{
        const respuestaUsuarios = await fetch (`${URLusuarios}/${id}`, {
            method: "DELETE", 
         
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}


export const obtenerUsuarioAPI = async(mail) =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios+'/');
        const usuarioBuscado = {
        dato: await respuestaUsuarios.json(),
        status: respuestaUsuarios.status
        }
        return usuarioBuscado
    }catch(error){
        console.log(error)
    }
}