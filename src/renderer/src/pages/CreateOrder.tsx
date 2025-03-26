import { useState } from "react";
import { Container, InputGroup, Button, Card, Row, Col, Table, Form } from "react-bootstrap";
import { FaSearch, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



function CreateOrder(): JSX.Element {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState([
    { id: 1, name: "Product Name", quantity: 1, price: 99.99, total: 99.99 },
  ]);

  const handleAddProduct = () => {
    setProducts([...products, { id: Date.now(), name: "New Product", quantity: 1, price: 0.0, total: 0.0 }]);
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
    return (
      <Container fluid className="mt-5 vh-100 overflow-auto">
      <h2>Crear Nuevo Pedido</h2>
      
      <h5 className="mt-3">Informacion del Cliente</h5>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Buscar por telefono, email, nombre o apellido..." />
        <Button variant="outline-secondary">
          <FaSearch />
        </Button>
      </InputGroup>
      
      <Card className="p-3 mb-3">
        <Row>
          <Col>
            <strong>John Smith</strong><br />
            <small>john.smith@example.com | +1 555-123-4567</small>
          </Col>
        </Row>
      </Card>
      
      <h5>Fecha del pedido</h5>
      <InputGroup className="mb-3">
        <Form.Control type="text" placeholder="MM/DD/YYYY" />
        <Button variant="outline-secondary">
          <FaCalendarAlt />
        </Button>
      </InputGroup>

      <h5>Cantidad de articulos</h5>
      <InputGroup className="mb-3">
        <Form.Control type="number" placeholder="1" />
      </InputGroup>
      
      {/* <h5>Productos</h5>
      <Table bordered>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <Form.Control type="number" min="1" defaultValue={product.quantity} />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>${product.total.toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(product.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAddProduct}>Agregar Producto</Button>
      
      <h5 className="mt-4">Resumen del Pedido</h5>
      <Card className="p-3 mb-3">
        <strong>Total del pedido</strong>
        <p>Subtotal: $99.99 Tax (8%): $8.00 Shipping: $5.99 Total: $113.98</p>
      </Card> */}
      
      <h5>Notas</h5>
      <Form.Control as="textarea" rows={3} placeholder="Notas del pedido..." />
      
      <div className="mt-4 d-flex justify-content-end">
        <Button variant="light" className="me-2" onClick={()=> navigate("/home")} >Cancelar</Button>
        <Button variant="primary">Crear Pedido</Button>
      </div>
    </Container>
    )
  }
  
  export default CreateOrder