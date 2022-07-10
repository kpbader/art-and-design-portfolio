import "./print.css";
import nycPrint from "../../assets/images/NYC_print_mockup.jpg";
import brandyOne from "../../assets/images/brandy_mixture.jpg";
import lany from "../../assets/images/LANY-print.jpg";
import laDirty from "../../assets/images/LA-dirty-print.jpg";
import seaRanch from "../../assets/images/sea-ranch.jpg";
import flowerFence from "../../assets/images/flowerfence.jpg";
import alex from "../../assets/images/alex.jpg";

function Print() {

    return (
        <section id="printProjects">
            <div id="brandyOneIMG" className="piece">
                <img src={nycPrint} alt="Portfolio piece"/>
                <p>Framed digital collage, 24 x 30", 2020</p>
            </div>
            <div id="brandyOneIMG" className="piece">
                <img src={brandyOne} alt="Portfolio piece"/>
                <p>Digital collage, 10 x 15" (print), 2020</p>
            </div>
            <div id="lanyIMG" className="piece">
                <img src={lany} alt="Portfolio piece"/>
                <p>Digital collage, 18 x 24" (print), 2020</p>
            </div>
            <div id="laDirtyIMG" className="piece">
                <img src={laDirty} alt="Portfolio piece"/>
                <p>Digital collage, 9 x 15" (print), 2020</p>
            </div>
            <div id="seaRanchTextIMG" className="piece">
                <img src={seaRanch} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 15" (print), 2020</p>
            </div>
            <div id="flowerFenceIMG" className="piece">
                <img src={flowerFence} alt="Portfolio piece"/>
                <p>Digital collage, 15 x 10" (print), 2020</p>
            </div>
            <div id="alexIMG" className="piece">
                <img src={alex} alt="Portfolio piece"/>
                <p>Mezzotint, 10 x 5", 2017</p>
            </div>
        </section>
    )
}

export default Print;