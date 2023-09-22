import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Dice from '../images/DiceGame.PNG'; 
import MachineAgents from '../images/MachineAgents.PNG'; 
import Slider from '../images/Slider.PNG'; 
import Task from '../images/Task.PNG'; 
import Vue from '../images/Vue.PNG'; 
import Friends from '../images/Friends.PNG'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";
import project from '../models/project';
import { BsGithub } from "react-icons/bs";

// ehm how about using a json file to read this from instead, not possible, can't directly type in path to image anymore for some odd reason
let projects = [new project("simple dungeon dice", "https://jeff0167.github.io/Test/", "https://github.com/jeff0167/Test", Dice), 
new project("Friends app", "https://jeff0167.github.io/GUI_Project/", "https://github.com/jeff0167/GUI_Project", Friends),
new project("Friendly reminder app", "http://app.moedekjaer.dk/", "https://github.com/NullerGoej/Remory", Task),
new project("Simple vue application", "https://jeff0167.github.io/JavaScript-with-vue/", "https://github.com/jeff0167/JavaScript-with-vue", Vue),
new project("Machine agents playing vollyball", "https://jeff0167.github.io/VollyBall_ML-Agents/", "https://github.com/jeff0167/VollyBall_ML-Agents", MachineAgents),
new project("Ionic app with sliders and GPS", "https://jeff0167.github.io/ComponentMasterAndSlider/", "https://github.com/jeff0167/ComponentMasterAndSlider", Slider),
] 

function Projects() {

  let navigate = useNavigate();  // this is copy and pasted each time, not great
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  let content = projects.map(project =>{
      return (
      <Col>
            <Card key={project.projectTitle} bg="dark" style={{ width: '35rem'}}>
              <a href={project.projectLink}>
                <div class="imageZoom">
                  <Card.Img src={project.projectImagePath}/> 
                </div>
              </a>
              <Card.Body className='d-xl-flex justify-content-center'>
                <Card.Title class="text-white">{project.projectTitle}</Card.Title>
                <a href={project.githubRepoLink}><BsGithub className='iconLinkMarginLeft'></BsGithub></a>
              </Card.Body>
            </Card>
      </Col>);
  });
  
  return (
    <div>
      <RiArrowLeftCircleFill class="backArrow" onClick={()=> navigate("../portfolio_bootstrap")}></RiArrowLeftCircleFill>
        <Container class="container">
          <Row md={3}>       
            {content}        
          </Row>
        </Container>
    </div>
  );
}

export default Projects;