import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { consultarAPI } from '../helpers/queries';
import ItemReceta from './Receta/ItemReceta';
import {Link} from 'react-router-dom';
import '../../App.css'

const Administrador = () => {
const [recetas, setRecetas]=useState([])


useEffect  (()=>{
//opción 1

consultarAPI().then((respuesta)=>{
console.log(respuesta)
setRecetas(respuesta)
})

    // opcion 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI();
    //   console.log(prueba);
    // }
    // consultaPrueba();

  
},[])

return (
    <div className="container ">
        <div className="d-flex justify-content-between my-3">
             <h2>Recetas Disponibles</h2>
            <Link className="btn btn-primary" to="/administrar/crear">Agregar</Link>            
        </div>
    <Table className="tablaAdministrador" responsive striped bordered>          
      <thead>                
        <tr className="fila">
          <th>Cod</th>
          <th>Nombre</th>
          <th>Dificultad</th>
          <th>Categoría</th>
          <th>Ingredientes</th>
          <th>Pasos</th>
          <th>URL de la Imagen</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {
             recetas.map((receta)=> <ItemReceta key={receta._id} receta={receta} setRecetas={setRecetas}></ItemReceta> )
        }
     </tbody>
    </Table>
    </div>
  );
};

export default Administrador;