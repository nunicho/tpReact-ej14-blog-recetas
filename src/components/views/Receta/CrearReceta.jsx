import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { creaRecetaAPI } from "../../helpers/queries";
import { useNavigate} from "react-router-dom"


const CrearReceta = () => {

const {register, handleSubmit, formState:{errors}, reset} = useForm( 
  {defaultValues: {
    nombreReceta: "",
    resumen:"",
    dificultad: "",
    ingredientes:"",
    categoria: "",
    pasos: "",
    imagen:"",
  }});

// inicializar la navegación
const navegacion = useNavigate();

const onSubmit = (datos) =>{
  // los datos ya están validados
  console.log(datos)
  // enviar los datos a la api
  creaRecetaAPI(datos).then((respuesta)=>{
    if(respuesta.status === 201){
      // el producto se creó
      Swal.fire('Receta creada', 'La receta fue creada correctamente', 'success')
      reset();
      navegacion ('/administrador');
    }else{
      //mostrar 
      Swal.fire('Receta no creada', 'Vuelva a intentar nuevamente', 'error')
    }
    
  })
}


return (
    <div className="container">
        <div>
            <h2>Nueva Receta</h2>
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
       
       <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Resumen</Form.Label>
        <Form.Control 
        type="text" 
        as="textarea"
        rows={5}
        placeholder="Salpimentar, cortar en juliana..."
        {...register('resumen', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 500,
            message: 'Debe ingresar como máximo 20000 caracteres'
          }
       })} />
       <Form.Text className="text-danger">{errors.resumen?.message}</Form.Text>
       </Form.Group> 


      <Form.Group className="mb-3">
        <Form.Label>Dificultad</Form.Label>
        <Form.Select 
        {...register ('dificultad', {
          required:'Debe seleccionar una dificultad'
        })}>
           <option value="">Seleccione una opcion</option>
            <option value="muy facil">Muy fácil</option>
            <option value="facil">Fácil</option>
            <option value="intermedio">Intermedio</option>
            <option value="dificil">Difícil</option>
            <option value="experto">Experto</option>
        </Form.Select>
         <Form.Text className="text-danger">{errors.dificultad?.message}</Form.Text>
      </Form.Group>
       
      <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control 
        type="text" 
        as="textarea"
        rows={5}
        placeholder="1 kg de carne, dos pimientos..."
        {...register('ingredientes', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 10000,
            message: 'Debe ingresar como máximo 1000 caracteres'
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
            <option value="Desayuno/Merienda">Desayuno/Merienda</option>
            <option value="Plato principal">Plato Principal</option>
            <option value="Postre">Postre</option>
            <option value="Ensalada">Ensalada</option>
            <option value="Aperitivo">Aperitivo</option>
        </Form.Select>
         <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
      </Form.Group>
       
       <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Pasos</Form.Label>
        <Form.Control 
        type="text" 
        as="textarea"
        rows={5}
        placeholder="Salpimentar, cortar en juliana..."
        {...register('pasos', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 20000,
            message: 'Debe ingresar como máximo 20000 caracteres'
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

export default CrearReceta;


/*
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
*/