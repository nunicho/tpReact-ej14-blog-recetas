import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {borrarRecetaAPI, consultarAPI } from '../../helpers/queries';
import { Link } from 'react-router-dom';

const ItemReceta = ({receta, setRecetas}) => {
const borrarReceta = () =>{
Swal.fire({
  title: '¿Estás seguro? de eliminar la receta',
  text: "No se puede revertir este paso",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Borrar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    //realizar la consulta a la API
    borrarRecetaAPI(receta.id).then((respuesta)=>{
      if(respuesta.status === 200){
        consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setRecetas(respuesta)
      })
      Swal.fire(
      'Receta borrada!',
      'La receta fue correctamente borrada',
      'success'
    )
      } else {
        Swal.fire(
      'Se produjo un error',
      'Pruebe hacer esta operación más tarde',
      'success'
     )}
    })
  
  }
})

  } 
  
  return (
        <tr>
          <td>{receta.id}</td>
          <td>{receta.nombreReceta}</td>
          <td>{receta.dificultad}</td>
          <td>{receta.categoria}</td>
          <td>{receta.ingredientes}</td>
          <td>{receta.pasos}</td>
          <td>{receta.imagen}</td>
          <td>
            <Link className="btn btn-warning" to={`/administrar/editar/${receta.id}`}>Editar</Link>
            <Button variant="danger" onClick={borrarReceta}>Borrar</Button>
          </td>
        </tr>
    );
};

export default ItemReceta;