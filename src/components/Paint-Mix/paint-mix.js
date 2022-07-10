import greatTrain from "../../assets/images/greattrainfinal1.jpeg";
import camAndVon from "../../assets/images/CamandVon1.jpg";
import kPerry from "../../assets/images/KPerry1.jpg";
import horseMan from "../../assets/images/Frenchhorseman_Retouched.jpg";
import kUpton from "../../assets/images/KU1.jpg";
import flagCrew from "../../assets/images/flag-crew.jpg";
import kingG from "../../assets/images/KINGGFINAL.jpg";
import jack from "../../assets/images/jackuntitled.jpg";
// import gWash from "../../assets/images/GW.jpg";

import "./paint-mix.css";

function Paint() {

    return (
        <section id="paintProjects">
            <div id="camAndVonIMG" className="piece">
                <img src={camAndVon} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="flagCrewIMG" className="piece">
                <img src={flagCrew} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="kPerryIMG" className="piece">
                <img src={kPerry} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="kingGIMG" className="piece">
                <img src={kingG} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
                </div>
            <div id="kUptonIMG" className="piece">
                <img src={kUpton} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>

            <div id="horseIMG" className="piece">
                <img src={horseMan} alt="Portfolio piece"/>
                <p>Mixed media on panel, 48 x 48", 2017</p>
            </div>
            <div id="greatTrainIMG" className="piece">
                <img src={greatTrain} alt="Portfolio piece"/>
                <p>Oil on masonite, 8 x 10", 2015</p>
            </div>
            <div id="jackIMG" className="piece">
                <img src={jack} alt="Portfolio piece"/>
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