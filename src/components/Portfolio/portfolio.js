import { Card, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css';
import kickCan from "../../assets/images/kick-the-can.jpg"
import bang from "../../assets/images/greattrainfinal1.jpeg";
import steinerStreet from "../../assets/images/steiner_bayview_vintage.jpg";
import LAcar from "../../assets/images/LA-car.png";
import KCB from "../../assets/images/KCB.jpg";
import Brandy from "../../assets/images/brandy_mixture.jpg";


function Portfolio() {

  const projects = [
    {
      name: 'Ludicrous',
      link: "/Ludicrous",
      img: kickCan
    },
    {
      name: 'Print / Collage',
      link: "/Printandcollage",
      img: Brandy
    },
    {
      name: 'Painting / Mixed Media',
      link: "/Paintingandmixedmedia",
      img: bang
    },
    { 
      name: 'Photo',
      link: "/Photo",
      img: steinerStreet
    },
    {
      name: 'Motion',
      link: "/Motion",
      img: LAcar
    },
    {
      name: 'Misc. Design',
      link: "/Miscdesign",
      img: KCB
    }
  ];


  return (
    <Container className="projects-container">
      <Row className="projects-row">
        {projects.map((project, i) => {
          return (
            <Col className="card-column">
              <Card className="project-card">
                <Card.Img src={project.img} alt="Card image" id="IMG"
                  />
                <Card.ImgOverlay>
                  
                  <Link className="card-text" to={project.link}>{project.name}</Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>



  );
}

export default Portfolio;