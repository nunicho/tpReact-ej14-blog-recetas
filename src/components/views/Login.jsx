import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {useState} from "react"
import { consultarUsuarioAPI} from "../helpers/queries";
import Swal from 'sweetalert2';


const Login = () => {


    // ESTO ES PARA EL PASSWORD
const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


const {register, handleSubmit, formState:{errors}} = useForm(
  {defaultValues: {
    mail: "",
    password: "",
  }});


//CONSULTA A LA API SI EXISTE EL USUARIO
const onSubmit = (datos) =>{
  // console.log(datos)
  console.log('desde nuestra función submit')
  const valueMail = 'datos del mail '+datos.mail
  const valuePassword= 'datos del password '+datos.password
  console.log(valueMail)
  console.log(valuePassword)
  consultarUsuarioAPI()
      .then((respuestaUsuarios)=>{
      console.log(respuestaUsuarios)
      const isFound= respuestaUsuarios.some(element =>{
      if (element.mail === datos.mail && element.password === datos.password){
        return true
        }
        return false;
      });
      if (isFound){
        Swal.fire('Usuario encontrado', 'Bienvenido', 'success')
        console.log("Usuario encontrado")
      }else{
        Swal.fire('Usuario no encontrado', 'Verifique el usuario y/o contraseña', 'error')
        console.log("Usuario no encontrado")
      }
      })
                   
    }
  return (
    <div className="container mainSection">
        <div>
            <h2>Login</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
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
         
        <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
       </Form.Group>
      <Button variant="primary" type="submit">
       Enviar
      </Button>     
    </Form>
      <Button className="my-2" variant="success" onClick={togglePassword}>Ver contraseña</Button>
   
    </div>
  );
}

export default Login;



