import { Card, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kickCan from "../../assets/images/kick-the-can.jpg";
import "./ludicrous.css";

function Ludicrous() {

    return (
        <section id="ludicrousProjects">
            <div id="kickCanIMG">
                <img src={kickCan} alt="Portfolio piece"/>
                <p>Untitled, Print on paper, 8 x 12", 2021</p>
            </div>
        </section>
    )
}

export default Ludicrous;