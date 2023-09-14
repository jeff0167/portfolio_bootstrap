import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Card, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledAlert, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
  
} from 'react-bootstrap'; // can't you import all an easier way?

import resume from '../images/Resume2.png';

// i want three columns with a rounded box in each with content. they are clickable and displays what the boxc is about...

function About() {  // shift + alt + f  to format

  // need an image of me
  // need name and stuff
  // skills

  return (
    <div className="App">
    <div class="header">
      <Container class="container">
        <Row xs={1} md={2}>
          <Col>
            <Card bg="transparent" style={{ width: '80rem' }}>
            <div class="bg-transparent">
                <Card.Img src={resume}/> 
              </div>
            </Card>
            </Col> 
          {/* Would like the profile png top right and below have all the links, possibly within a small card */}

            {/* <Col>
            <Card bg="dark" style={{ width: '35rem' }}>
              <Card.Body class="about">
                <Card.Title class="text-white">Jeff Borch-christensen, 30 years old</Card.Title>
                <br></br>
                <Card.Title class="text-white">30 years old</Card.Title>
                <br></br>
                <Card.Title class="text-white"></Card.Title>
                <Card.Title class="text-white">Experience:</Card.Title>
                <Card.Title class="text-white">Full stack</Card.Title>
                <Card.Title class="text-white">C#, c++, python</Card.Title>
                <br></br>
                <Card.Title class="text-white">Linked in: <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da">Linked in</a></Card.Title>
                <Card.Title class="text-white">Github: <a href="https://github.com/jeff0167">Github</a></Card.Title>
                <Card.Title class="text-white">Linked in: <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da">Linked in</a></Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card bg="dark" style={{ width: '35rem' }}>
              <Card.Body class="about">
                <Card.Title class="text-white">Links</Card.Title>
                <br></br>
                <Card.Title class="text-white">Linked in: <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da">Linked in</a></Card.Title>
                <Card.Title class="text-white">Github: <a href="https://github.com/jeff0167">Github</a></Card.Title>
                <Card.Title class="text-white">Linked in: <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da">Linked in</a></Card.Title>
              </Card.Body>
            </Card>
            </Col> */}
        </Row>
      </Container>
      </div>
  </div>
  );
}

// class Jeff
// {
//     Constructor()
//     {
//         this.name = "Jeff Borch-christensen";
//         this.age = 30;
//         this.mail = "jeff0167@edu.zealand.dk";
//     }

//     ToString()
//     {
//         // Profile
//         console.log("I am a web developer with over 5 years experience as a programmer, starting out with game development");
//         console.log("and went to school to get a computer science degree, learning about OOP and fullstack");

//         // About me
//         console.log("In my free time I like to go outside and run, play video games and develop video games");
//     }

//     Education()
//     {
//         return [
//                 { "2020-2023": "Zealand Academy - Computer Scienece degree" },
//                 { "2023-2024": "Zealand Academy - Bachelor in web development" }
//         ]
//     }

//     Skills()
//     {
//         return [ "Html/CSS/JS", "TypeScript", "Vue", "Angular",
//                   "MSSQL", "MySQL", "Firebase", ".NET API",
//                   "C#", "C++", "Python", "Unity",           
//                   "Unit testing", "Postman", "Git", "Scrum"
//         ]
//     }
// }

export default About;