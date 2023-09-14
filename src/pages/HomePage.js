import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Card, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledAlert, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
  
} from 'react-bootstrap'; // can't you import all an easier way?
import { useNavigate } from "react-router-dom";

import final from '../images/final.jpg';
import final4 from '../images/final4.jpg'; // ever since building and deploying, you have to import the image, and using anything from the public folder is not allowed
import rock2 from '../images/Rock2.jpg'; // and the routing is messed up

// i want three columns with a rounded box in each with content. they are clickable and displays what the boxc is about...

function HomePage() {  // shift + alt + f  to format

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path; 
      navigate(path);
    }

  return (
    <div className="App">
        <Container class="container">
            <Row xs={1} md={3}>
                <Col>
                <Card bg="dark" style={{ width: '35rem' }} onClick={()=> navigate("about")}> {/* of course this has to change to...*/}
                    <div class="imageZoom">
                        <Card.Img variant="top" src={final}/> 
                    </div>
                    <Card.Body>
                        <Card.Title class="text-white">About me</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card bg="dark" style={{ width: '35rem' }} onClick={()=> navigate("projects")}>
                    <div class="imageZoom">
                        <Card.Img variant="top" src={final4} />
                    </div>
                    <Card.Body>
                        <Card.Title class="text-white">Projects</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                    <Card bg="dark" style={{ width: '35rem' }} >
                        <div class="imageZoom">
                            <Card.Img variant="top" src={rock2} />
                        </div>
                        <Card.Body>
                            <Card.Title class="text-white">Other</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HomePage;