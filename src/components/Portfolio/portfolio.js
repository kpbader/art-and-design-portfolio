import { Card, Container} from 'react-bootstrap';
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
      link: "some data",
      img: kickCan
    },
    {
      name: 'Painting / Mixed Media',
      link: "some data",
      img: bang
    },
    {
      name: 'Print / Collage',
      link: "some data",
      img: Brandy
    },
    {
      name: 'Motion',
      link: "some data",
      img: LAcar
    },
    {
      name: 'Misc. Design',
      link: "some data",
      img: KCB
    },
    { 
      name: 'Photo',
      link: "some data",
      img: steinerStreet
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
                  <Card.Title className="card-text">{project.name}</Card.Title>
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