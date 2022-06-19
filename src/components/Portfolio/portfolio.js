import { Card, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css';
import kickCan from "../../assets/images/kick-the-can.jpg"


function Portfolio() {

  const projects = [
    {
      name: 'project one',
      link: "some data",
      img: 'https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'project two',
      link: "some data",
      img: 'https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      name: 'project three',
      link: "some data",
      img: 'https://images.unsplash.com/photo-1519567770579-c2fc5436bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }
  ];


  return (
    <Container>
      <Row>
        {projects.map((project, i) => {
          return (
            <Col>
              <Card className="bg-dark text-white project-card">
                <Card.Img src={project.img} alt="Card image" id="currentWorksIMG" />
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