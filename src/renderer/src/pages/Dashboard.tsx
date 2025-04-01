import { CustomerState, fetchCustomers } from "@renderer/redux/slices/customerSlice";
import { useEffect } from "react";
import { Button, Col, Container, Form, InputGroup, Row, Stack, Table } from "react-bootstrap";
import { FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Dashboard(): JSX.Element {


  const customersData = useSelector((state)=>state.customers);
  const dispatch = useDispatch();
  



  useEffect(()=>{
    dispatch(fetchCustomers());
  }, []);

  

  console.log("Customers Data: ", customersData);
  

  
  
  const orders = [
    { id: "ORD-7829", customer: "Emily Davis", date: "Jun 10, 2023", items: 3, total: "$245.99", status: "Delivered" },
    { id: "ORD-7823", customer: "Sarah Johnson", date: "Jun 2, 2023", items: 2, total: "$129.50", status: "Processing" },
    { id: "ORD-7814", customer: "John Smith", date: "May 15, 2023", items: 5, total: "$389.75", status: "Delivered" },
    { id: "ORD-7798", customer: "Michael Brown", date: "Apr 10, 2023", items: 1, total: "$59.99", status: "Cancelled" }
  ];

  const navigate = useNavigate();
  

    return (
    
      <Container fluid className="mb-5 vh-100 overflow-auto">
        <Row className="mb-3">
        <Col md={6} className="text-end mt-4">
        
           
            <Button variant="outline-secondary" onClick={()=> navigate("/")} >
              Salir
            </Button>
       
        </Col>
     
      </Row>
      <Row>
        <Col className="mt-4 mb-4">
        <h2>El 1/4 de Arriba</h2>
        
        </Col>
      </Row>
      {/* Customers Section */}
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control placeholder="Buscar clientes..." />
            <Button variant="outline-secondary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={6} className="text-end mt-4">
          <Button variant="primary" onClick={()=> navigate("/add-customer")}>Agregar cliente</Button>
        </Col>
      </Row>

      <h4>Clientes</h4>
      <Table className="overflow-auto" striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { customersData.customers.length > 0 && customersData.customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.nombre}</td>
              <td>{customer.apellidos}</td>
              <td>{customer.email}</td>
              <td>{customer.telefono}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2">
                  <FaEdit />
                </Button>
                <Button variant="outline-danger" size="sm">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Recent Orders Section */}
      <Row className="mb-3 mt-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control placeholder="Buscar pedidos..." />
            <Button variant="outline-secondary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={6} className="text-end mt-4">
          <Button variant="primary" onClick={()=> navigate("/create-order")}>Crear pedido</Button>
        </Col>
      </Row>

      <h4>Pedidos recientes</h4>
      <Table className="overflow-auto" striped bordered hover>
        <thead>
          <tr>
            <th>Pedido ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Articulos</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.items}</td>
              <td>{order.status}</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2">
                  <FaEye />
                </Button>
                <Button variant="outline-primary" size="sm">
                  <FaEdit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    )
  }
  
  export default Dashboard