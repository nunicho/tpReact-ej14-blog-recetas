import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useParams} from "react-router-dom"
import { obtenerRecetaAPI } from '../helpers/queries';
import Swal from "sweetalert2";

function DetalleReceta() {

const [nombreReceta, setNombreReceta] = useState ();
const [dificultad, setDificultad] = useState ();
const [ingredientes, setIngredientes] = useState ();
const [categoria, setCategoria] = useState ();
const [pasos, setPasos] = useState ();
const [imagen, setImagen] = useState ();

// traer el parámetro de la ruta
const {id} = useParams();


useEffect(()=>{
    obtenerRecetaAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        setNombreReceta(respuesta.dato.nombreReceta)
        setDificultad(respuesta.dato.dificultad)
        setIngredientes(respuesta.dato.ingredientes)
        setCategoria(respuesta.dato.categoria)
        setPasos(respuesta.dato.pasos)
        setImagen(respuesta.dato.imagen)
      }else{
      Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])




  return (
    <div className="container">
    <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Card.Img variant="top  w-25 " src={imagen} />
      <Card.Body>
        <Card.Title>{nombreReceta}</Card.Title>
        <Card.Text>
        <hr></hr>
        <Badge bg="success">{categoria}</Badge>
        <p className="my-3 fw-bold">Dificultad: {dificultad}</p>
        </Card.Text>
        <Card.Text>
        <hr></hr>
        <p className="my-3">{ingredientes}</p>
        </Card.Text>
        <Card.Text>
        <hr></hr>
        <p className="my-3">{pasos}</p>
        </Card.Text>
       </Card.Body>
    </Card>
    </div>
  );
}

export default DetalleReceta;