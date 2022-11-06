import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {useState} from "react"
import { creaUsuarioAPI } from "../helpers/queries";
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom"

function Registrar() {


    // ESTO ES PARA EL PASSWORD
const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


const {register, handleSubmit, formState:{errors}, reset} = useForm( 
  {defaultValues: {
    nombreUsuario:"",
    apellido:"",
    mail: "",
    password: "",
  }});

  // inicializar la navegación
const navegacion = useNavigate();

const onSubmit = (datos) =>{
  console.log(datos)
  console.log('desde nuestra función submit')
 creaUsuarioAPI(datos).then((respuesta)=>{
    if(respuesta.status === 201){
      // el producto se creó
      Swal.fire('Usuario creado', 'El usuario fue creado correctamente', 'success')
      reset();
      navegacion ('/Registrar');
    }else{
      //mostrar 
      Swal.fire('Usuario no creado', 'Vuelva a intentar nuevamente', 'error')
    }
    
  })
}




  return (
    <div className="container mainSection">
        <div>
            <h2>Registrar</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
       
        <Form.Group className="mb-3" controlId="mail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su nombre"
         {...register('nombreUsuario',{
         required:'El nombre es obligatorio',
         minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 50 caracteres'
          },
        
        })}
        
       />
       <Form.Text className="text-danger">{errors.nombreUsuario?.message}</Form.Text>
       </Form.Group>

             <Form.Group className="mb-3" controlId="mail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su apellido"
         {...register('apellido',{
          required:'El apellido es obligatorio',
         minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 50 caracteres'
          },
        
        })}
        
       />
       <Form.Text className="text-danger">{errors.apellido?.message}</Form.Text>
       </Form.Group>
    
  
      <Form.Group className="mb-3" controlId="mail">
        <Form.Label>Mail</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese el mail"
         {...register('mail',{
          required:'El mail es obligatorio',
          pattern:{
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:'Debe ingresar un mail válido.'
          },
        })}
        
       />
       <Form.Text className="text-danger">{errors.mail?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoPrecio">
        
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type={passwordShown ? "text" : "password"} 
        placeholder="Ingrese el password" 
        {...register('password',{
          required:'Es obligatorio ingresar una password',
          pattern:{
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:'La contraseña debe como minimo 8 caracteres y al menos una letra, un número y un símbolo especial.'
          },
        })}
        
         />
         <button onClick={togglePassword}>Ver contraseña</button>
        <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
       </Form.Group>               
      <Button variant="primary" type="submit">
       Enviar
      </Button>
    </Form>
    </div>
  );
}

export default Registrar;