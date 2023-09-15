import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap'; // can't you import all an easier way?
import { useNavigate } from "react-router-dom";
import portrait from '../images/Portrait.jpg';
import project from '../images/Project.jpg'; // ever since building and deploying, you have to import the image, and using anything from the public folder is not allowed
import other from '../images/Rock2.jpg'; // and the routing is messed up

function HomePage() {  // shift + alt + f  to format

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path; 
      navigate(path);
    }

  return (
      <div>
        <code class="code">My portfolio</code>
        <Container class="container">
            <Row xs={1} md={3}>
                <Col>
                    <Card bg="dark" style={{ width: '35rem' }} onClick={()=> navigate("about")}>
                        <div class="imageZoom">
                            <Card.Img variant="top" src={portrait}/> 
                        </div>
                        <Card.Body>
                            <Card.Title class="text-white">About me</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" style={{ width: '35rem' }} onClick={()=> navigate("projects")}>
                        <div class="imageZoom">
                            <Card.Img variant="top" src={project} />
                        </div>
                        <Card.Body>
                            <Card.Title class="text-white">Projects</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" style={{ width: '35rem' }} >
                        <div class="imageZoom">
                            <Card.Img variant="top" src={other} />
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