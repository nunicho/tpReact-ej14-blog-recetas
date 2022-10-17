import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardProducto = ({receta}) => {


return (  
    <Card className="col-12 col-md-4 col-lg-3 p-2">
      <Card.Img variant="top" src={receta.imagen} />
      <Card.Body>
        <Card.Title>{receta.nombreReceta}</Card.Title>
        <Card.Text className="my-3">{receta.dificultad}</Card.Text>
        <Card.Text className="my-3">{receta.categoria}</Card.Text>
        <Card.Text className="my-3">{receta.ingredientes}</Card.Text>
        <Card.Text className="my-3">{receta.pasos}</Card.Text>
        <hr></hr>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
    </Card>
    
  );
}


export default CardProducto;

