import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap'; 
import { useNavigate } from "react-router-dom";
import resume from '../images/Resume_opaque.png';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function About() { 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  return (
    <div className="App">
      <RiArrowLeftCircleFill class="backArrow" onClick={()=> navigate("../portfolio_bootstrap")}></RiArrowLeftCircleFill>
    <div class="header">
      <Container class="container">
            <Card bg="transparent" style={{ width: '80rem' }}>
            <div class="bg-transparent">
                <Card.Img src={resume}/> 
              </div>
            </Card>
      </Container>
      </div>
      <div class="position-absolute bottom-0 end-0 infoCard">
        <Card bg="dark" style={{ width: '15rem' }}>
            <Card.Body>
                <br></br>
                <div>
                  <a href="https://github.com/jeff0167"><BsGithub class="iconLink"></BsGithub></a>
                  <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da"><BsLinkedin class="iconLink"></BsLinkedin></a>
                </div>
                <div class="position-absolute top-50 start-50 translate-middle">
                  <a href="https://github.com/jefferen"><BsGithub class="iconLink"></BsGithub></a>
                </div>
                <br></br>
              </Card.Body>
        </Card>
      </div>
  </div>
  );
}

export default About;