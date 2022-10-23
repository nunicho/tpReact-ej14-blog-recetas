import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import {Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const EditarReceta = () => {
const {id} = useParams();
const {
   register,
   handleSubmit,
   formState:{errors},
   setValue} = useForm({
    defaultValues: {
    nombreReceta: "",
    dificultad: "",
    ingredientes:"",
    categoria: "",
    pasos: "",
    imagen:"",
  },
  });

const navegacion = useNavigate();

  useEffect(()=>{
    obtenerRecetaAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        //cargar los datos de la repuesta en el formulario
        setValue('nombreReceta', respuesta.dato.nombreReceta)
        setValue('dificultad', respuesta.dato.dificultad)
        setValue('ingredientes', respuesta.dato.ingredientes)
        setValue('categoria', respuesta.dato.categoria)
        setValue('pasos', respuesta.dato.pasos)
        setValue('imagen', respuesta.dato.imagen )
        console.log(respuesta)
      }else{
        Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])


const onSubmit = (producto) =>{
  // los datos ya están validados
  console.log(producto)
  // enviar los datos a la api
  editarRecetaAPI(id,producto).then((respuesta)=>{
    if(respuesta.status===200){
      // el producto se creó
      Swal.fire('Receta actualizada', 'La receta fue actualizada correctamente', 'success')
      navegacion ('/administrador');
    }else{
      //mostrar 
      Swal.fire('Ocurrió un error', 'Vuelva a intentar nuevamente', 'error')
    }
    
  })
}


return (
    <div className="container">
        <div>
            <h2>EditarReceta</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Nombre Receta</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ej. Sandwich"
        {...register('nombreReceta', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 20 caracteres'
          }
       })} />
       <Form.Text className="text-danger">{errors.nombreReceta?.message}</Form.Text>
       </Form.Group>
       
      <Form.Group className="mb-3">
        <Form.Label>Dificultad</Form.Label>
        <Form.Select 
        {...register ('dificultad', {
          required:'Debe seleccionar una dificultad'
        })}>
           <option value="">Seleccione una opcion</option>
            <option value="&#9733;&#9734;&#9734;&#9734;&#9734;">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
            <option value="&#9733;&#9733;&#9734;&#9734;&#9734;">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
            <option value="&#9733;&#9733;&#9733;&#9734;&#9734;">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
            <option value="&#9733;&#9733;&#9733;&#9733;&#9734;">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
            <option value="&#9733;&#9733;&#9733;&#9733;&#9733;">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
        </Form.Select>
         <Form.Text className="text-danger">{errors.dificultad?.message}</Form.Text>
      </Form.Group>
       
      <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="1 kg de carne, dos pimientos..."
        {...register('ingredientes', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 200 caracteres'
          }
       })} />
       <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
       </Form.Group> 
      
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select 
        {...register ('categoria', {
          required:'Debe seleccionar una categoria'
        })}>
           <option value="">Seleccione una opcion</option>
            <option value="desayuno">Desayuno</option>
            <option value="plato-principal">Plato Principal</option>
            <option value="postre">Postre</option>
            <option value="ensalada">Ensalada</option>
            <option value="aperitivo">Aperitivo</option>
        </Form.Select>
         <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
      </Form.Group>
       
       <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Pasos</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Salpimentar, cortar en juliana..."
        {...register('pasos', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 1000 caracteres'
          }
       })} />
       <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>
       </Form.Group> 
       
       <Form.Group className="mb-3" controlId="nuevoImagen">      
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" 
        {...register('imagen',{
          required:'La URL  de la imagen es obligatoria',
          pattern:{
              value: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
              message:'Debe ingresar una URL válida'
          },
        })} />
       <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
       </Form.Group>    
       <Button variant="primary" type="submit">
       Guardar
      </Button>
    </Form>
    </div>
  );
}

export default EditarReceta;