import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useParams} from "react-router-dom"
import { obtenerRecetaAPI } from '../helpers/queries';
import Swal from "sweetalert2";
import Spinner from '../common/Spinner';

const DetalleReceta = () =>{ 

const {id} = useParams(); 

const [nombreReceta, setNombreReceta] = useState ();
const [dificultad, setDificultad] = useState ();
const [ingredientes, setIngredientes] = useState ();
const [categoria, setCategoria] = useState ();
const [pasos, setPasos] = useState ();
const [imagen, setImagen] = useState ();

//Spinner
const [mostrarSpinner, setMostrarSpinner] = useState(false)

// traer el parámetro de la ruta



useEffect(()=>{
      setMostrarSpinner(true);
        obtenerRecetaAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        setNombreReceta(respuesta.dato.nombreReceta)
        setDificultad(respuesta.dato.dificultad)
        setIngredientes(respuesta.dato.ingredientes)
        setCategoria(respuesta.dato.categoria)
        setPasos(respuesta.dato.pasos)
        setImagen(respuesta.dato.imagen)
        setMostrarSpinner(false);
      }else{
      Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])

const mostrarComponente = (mostrarSpinner === true) ? (<Spinner></Spinner>):(<Card className="d-md-flex flex-md-row">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombreReceta}</Card.Title>
        <hr></hr>
        <Card.Text className="my-3 fw-bold">
        <span className = "m-3" >Dificultad: {dificultad}</span>
         <Badge bg="success">{categoria}</Badge>
        </Card.Text>
        <hr></hr>
        <Card.Text className="my-3">
        <span className = "fw-bold" >Ingredientes: </span>
        {ingredientes}
        </Card.Text>
        <hr></hr>
        <Card.Text className="my-3">
        <span className = "fw-bold" >Pasos: </span>
        {pasos}
        </Card.Text>
       </Card.Body>
    </Card>)


  return (
    <div className="container">
    {mostrarComponente}
    </div>
  );
}

export default DetalleReceta;
