import React, { useEffect, useState } from 'react';
import CardReceta from './Receta/CardReceta';
import { consultarAPI } from '../helpers/queries';
import Spinner from '../common/Spinner'

const Inicio = ({receta}) => {

//Spinner
const [mostrarSpinner, setMostrarSpinner] = useState(false)


    const [recetas, setRecetas]=useState([])

useEffect  (()=>{
setMostrarSpinner(true);
consultarAPI().then((respuesta)=>{
console.log(respuesta)
setRecetas(respuesta)
setMostrarSpinner(false);
})

},[])

const mostrarComponente = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
             recetas.map((receta)=> <CardReceta key={receta._id} receta={receta} setRecetas={setRecetas}></CardReceta> )
        )

    return (
        <div>
            <h1 className="mt-3 text-center">DELICIAS CORDOBESAS</h1>
            <h3 className="my-1 text-center">¡Recetas con mucho saaaaabor!</h3>
            <hr></hr>
            <div className="row">
           {mostrarComponente}
            </div>

           
        </div>
    );
};

export default Inicio;