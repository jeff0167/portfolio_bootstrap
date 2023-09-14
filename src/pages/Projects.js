import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Card, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledAlert, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
  
} from 'react-bootstrap'; // can't you import all an easier way?

import final4 from '../images/final4.jpg';

// i want three columns with a rounded box in each with content. they are clickable and displays what the boxc is about...

function Projects() {  // shift + alt + f  to format
  return (
    <div className="App">
      <body>
        <Container class="container">
          <Row xs={1} md={3}>
            <Col class="geeks">
              <Card bg="dark" style={{ width: '35rem' }}>
                <div class="imageZoom">
                  <Card.Img variant="top" src={final4}/> 
                </div>
                <Card.Body>
                  <Card.Title class="text-white">Projects</Card.Title>
                </Card.Body>
              </Card>
              </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Projects;