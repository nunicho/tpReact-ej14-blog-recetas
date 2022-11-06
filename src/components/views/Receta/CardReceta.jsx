import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';



const CardProducto = ({receta}) => {


return (  
    <Card className="col-12 col-md-4 col-lg-3 p-2">
      <Card.Img variant="top" src={receta.imagen} />
      <Card.Body>
        <Card.Title>{receta.nombreReceta}</Card.Title>
        <Card.Text className="my-3"><span className="fw-bold">Dificultad: </span>{receta.dificultad}</Card.Text>
        <Card.Text className="my-3"><span className="fw-bold">Categoría: </span> <Badge bg="success">{receta.categoria}</Badge></Card.Text>
        <Card.Text className="my-3"><span className="fw-bold">Ingredientes: </span>{receta.ingredientes}</Card.Text>
        <Card.Text className="my-3"><span className="fw-bold">Resumen: </span>{receta.resumen}</Card.Text>
         <hr></hr>
        <div className="text-center">
        <Link className="btn btn-danger " to={`/DetalleReceta/${receta._id}`}>Ver más</Link>
       </div>
      </Card.Body>
    </Card>
    
  );
}


export default CardProducto;

