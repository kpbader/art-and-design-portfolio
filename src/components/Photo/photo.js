import "./photo.css";
import steinerStreet from "../../assets/images/steiner_bayview_vintage.jpg";
import alta from "../../assets/images/alta_plaza_vintage.jpg";
import vbcMarina from "../../assets/images/VBCmarina1.jpg"
import vbcSeaWall from "../../assets/images/vancouverBCseawall.jpg";
import manBeach from "../../assets/images/ManhattanBeach1.jpg";
import veniceSkater from "../../assets/images/Venice skater1.jpg";
import echo from "../../assets/images/EchoPark2.jpg";
import seaRanch from "../../assets/images/Near SeaRanch3.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Photo () {

    return(
        <section id="photoProjects">
            <div id="altaIMG" className="piece">
                <LazyLoadImage src={alta} alt="Portfolio piece"/>
                <p>San Francisco</p>
            </div>
            <div id="steinerIMG" className="piece">
                <LazyLoadImage src={steinerStreet} alt="Portfolio piece"/>
                <p>San Francisco</p>
            </div>
            <div id="manBeachIMG" className="piece">
                <LazyLoadImage src={manBeach} alt="Portfolio piece"/>
                <p>Manhattan Beach</p>
            </div>
            <div id="vbcMarinaIMG" className="piece">
                <LazyLoadImage src={vbcMarina} alt="Portfolio piece"/>
                <p>Vancouver</p>
            </div>
            <div id="vbcSeaWallIMG" className="piece">
                <LazyLoadImage src={vbcSeaWall} alt="Portfolio piece"/>
                <p>Vancouver</p>
            </div>
            <div id="veniceSkaterIMG" className="piece">
                <LazyLoadImage src={veniceSkater} alt="Portfolio piece"/>
                <p>Venice Beach</p>
            </div>
            <div id="seaRanchIMG" className="piece">
                <LazyLoadImage src={seaRanch} alt="Portfolio piece"/>
                <p> Sea Ranch</p>
            </div>
            <div id="echoParkIMG" className="piece">
                <LazyLoadImage src={echo} alt="Portfolio piece"/>
                <p>Echo Park</p>
            </div>
        </section>
    )
}

export default Photo;