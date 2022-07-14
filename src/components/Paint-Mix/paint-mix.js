import greatTrain from "../../assets/images/greattrainfinal1.jpeg";
import camAndVon from "../../assets/images/CamandVon1.jpg";
import kPerry from "../../assets/images/KPerry1.jpg";
import horseMan from "../../assets/images/Frenchhorseman_Retouched.jpg";
import kUpton from "../../assets/images/KU1.jpg";
import flagCrew from "../../assets/images/flag-crew.jpg";
import kingG from "../../assets/images/KINGGFINAL.jpg";
import jack from "../../assets/images/jackuntitled.jpg";
// import gWash from "../../assets/images/GW.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./paint-mix.css";

function Paint() {

    return (
        <section id="paintProjects">
            <div id="camAndVonIMG" className="piece">
                <LazyLoadImage src={camAndVon} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="flagCrewIMG" className="piece">
                <LazyLoadImage src={flagCrew} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="kPerryIMG" className="piece">
                <LazyLoadImage src={kPerry} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="kingGIMG" className="piece">
                <LazyLoadImage src={kingG} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
                </div>
            <div id="kUptonIMG" className="piece">
                <LazyLoadImage src={kUpton} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>

            <div id="horseIMG" className="piece">
                <LazyLoadImage src={horseMan} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="greatTrainIMG" className="piece">
                <LazyLoadImage src={greatTrain} alt="Portfolio piece"/>
                <p>Oil on masonite, 8 x 10", 2015</p>
            </div>
            <div id="jackIMG" className="piece">
                <LazyLoadImage src={jack} alt="Portfolio piece"/>
                <p>Oil on masonite, 16 x 8", 2015</p>
            </div>
            {/* <div id="gWashIMG" className="piece">
                <img src={gWash} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div> */}

        </section>
    )

}

export default Paint;