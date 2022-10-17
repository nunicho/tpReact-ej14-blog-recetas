import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function DetalleReceta() {
  return (
    <div className="container">
    <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Card.Img variant="top  w-25 " src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Bifes</Card.Title>
        <Card.Text>
        <hr></hr>
        <Badge bg="success">Plato Principal</Badge>
        <p className="my-3 fw-bold">Precio: $300</p>
        </Card.Text>
       </Card.Body>
    </Card>
    </div>
  );
}

export default DetalleReceta;