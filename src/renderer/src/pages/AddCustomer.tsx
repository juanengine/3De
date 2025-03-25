import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function AddCustomer(): JSX.Element {

  const navigate = useNavigate();
  

    return (
      <Container fluid className="mt-5 vh-100 overflow-auto">
      <h2>Agregar Nuevo Cliente</h2>
      
      <h5 className="mt-3">Informmacion Personal</h5>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Escriba el nombre del cliente..." />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Escriba los apellidos..." />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group controlId="email" className="mt-3">
          <Form.Label> Direccion de Email</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
        </Form.Group>
        
        <Form.Group controlId="phone" className="mt-3">
          <Form.Label>Numero de Telefono</Form.Label>
          <Form.Control type="text" placeholder="+052 625 827 888" />
        </Form.Group>
        

        {/* <h5 className="mt-4">Informacion Adicional</h5>
      

        <Form.Group controlId="notes" className="mt-3">
          <Form.Label>Notas</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Notas del cliente" />
        </Form.Group> */}
        
     
        
        <div className="mt-4 d-flex justify-content-end">
          <Button variant="light" className="me-2" onClick={()=> navigate("/")}>Cancelar</Button>
          <Button variant="primary">Guardar Clientte</Button>
        </div>
      </Form>
    </Container>
    )
  }
  
  export default AddCustomer