import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {borrarRecetaAPI, consultarAPI } from '../../helpers/queries';
import { Link } from 'react-router-dom';
import '../../../App.css'

const ItemReceta = ({receta, setRecetas}) => {
const borrarReceta = () =>{
Swal.fire({
  title: '¿Estás seguro de eliminar la receta?',
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
    borrarRecetaAPI(receta._id).then((respuesta)=>{
      if(respuesta.status === 200){
        consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setRecetas(respuesta)
      })
      Swal.fire(
      '¡Receta borrada!',
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
          <td className="overflow">{receta._id}</td>
          <td className="overflow tdNombre">{receta.nombreReceta}</td>
          <td className="overflow">{receta.dificultad}</td>
          <td className="overflow">{receta.categoria}</td>
          <td className="overflow">{receta.ingredientes}</td>
          <td className="overflow">{receta.pasos}</td>
          <td className="overflow tdImagen">{receta.imagen}</td>
          <td>
            <Link className="btn btn-warning" to={`/administrar/editar/${receta._id}`}>Editar</Link>
            <Button variant="danger" onClick={borrarReceta}>Borrar</Button>
          </td>
        </tr>
    );
};

export default ItemReceta;