import { useContext } from 'react';
import { RestauranteContext } from '../../context/RestauranteContext';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const PaginaAdmin = () => {
  const { platos, agregarPlato, eliminarPlato } = useContext(RestauranteContext);

  const handleAgregarPlato = () => {
    // Lógica para agregar un nuevo plato
    const nuevoPlato = { id: Math.random().toString(36).substring(7), nombre: "Nuevo Plato", descripcion: "Descripción del nuevo plato" };
    agregarPlato(nuevoPlato);
    console.log('Plato agregado:', nuevoPlato);
  };
  
  const handleEliminarPlato = (platoId) => {
    // Lógica para eliminar el plato con el ID especificado
    eliminarPlato(platoId);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Panel de Administración</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {platos.map((plato) => (
          <Col key={plato.id}>
            <Card>
              <Card.Img variant="top" src={plato.img} alt={plato.nombre} style={{ width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Title>{plato.nombre}</Card.Title>
                <Card.Text>{plato.desc}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={() => handleEliminarPlato(plato.id)}>Eliminar</Button>
                  <Button onClick={handleAgregarPlato}>Agregar Plato</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PaginaAdmin;
