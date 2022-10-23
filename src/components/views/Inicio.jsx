import React, { useEffect, useState } from 'react';
import CardReceta from './Receta/CardReceta';
import { consultarAPI } from '../helpers/queries';

const Inicio = ({receta}) => {
    const [recetas, setRecetas]=useState([])

useEffect  (()=>{

consultarAPI().then((respuesta)=>{
console.log(respuesta)
setRecetas(respuesta)
})

},[])


    return (
        <div>
            <h1 className="my-5 text-center">SABORES CORDOBESES</h1>
            <hr></hr>
            <div className="row">
            {
             recetas.map((receta)=> <CardReceta key={receta.id} receta={receta} setRecetas={setRecetas}></CardReceta> )
        }
            </div>

           
        </div>
    );
};

export default Inicio;