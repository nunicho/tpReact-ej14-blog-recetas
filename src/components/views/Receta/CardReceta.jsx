import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const CardProducto = ({receta}) => {


return (  
    <Card className="col-12 col-md-4 col-lg-3 p-2">
      <Card.Img variant="top" src={receta.imagen} />
      <Card.Body>
        <Card.Title>{receta.nombreReceta}</Card.Title>
        <Card.Text className="my-3">Dificultad: {receta.dificultad}</Card.Text>
        <Card.Text className="my-3"> Categoría: {receta.categoria}</Card.Text>
        <Card.Text className="my-3">Ingredientes: {receta.ingredientes}</Card.Text>
        <Card.Text className="my-3">{receta.resumen}</Card.Text>
         <hr></hr>
        <Link className="btn btn-danger text-center" to={`/DetalleReceta/${receta.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
    
  );
}


export default CardProducto;

