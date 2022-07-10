import "./misc.css";
import ffPoster from "../../assets/images/FF_Poster_Mockup.jpg";
import ccPoster from "../../assets/images/CCposter_v1.jpg";
import kcb from "../../assets/images/KCB.jpg"
import kcbTwo from "../../assets/images/KC_Bandits_Final_two-01.jpg"
import kcbThree from "../../assets/images/KC-Bandits-Purp.jpg";
import kcbHat from "../../assets/images/KC_Bandits_hat.jpg";
import kcbJers1 from "../../assets/images/KC_Bandits_jerseyGallery_Artboard 1.png";
import kcbJers2 from "../../assets/images/KC_Bandits_jerseyGallery_Artboard 2.png" ;
import kcbJers3 from "../../assets/images/KC_Bandits_jerseyGallery_Artboard 6.png";
import tammsOne from "../../assets/images/Tamms_Label_v1.jpg";
import tammsTwo from "../../assets/images/Tamms_bottle_wet_8x12.jpg";

function Misc() {
    return(
        <section id="miscProjects">
            <div id="ffPosterIMG" className="piece">
                <img src={ffPoster} alt="Portfolio piece"/>
                <p>Poster mockup, 2020</p>
            </div>
            <div id="ccPosterIMG" className="piece">
                <img src={ccPoster} alt="Portfolio piece"/>
                <p>Poster design, 2020</p>
            </div>
            <div id="kcbIMG" className="piece">
                <img src={kcb} alt="Portfolio piece"/>
                <p>Logo design, 2020</p>
            </div>
            <div id="kcbTwoIMG" className="piece">
                <img src={kcbTwo} alt="Portfolio piece"/>
                <p>Logo design, 2020</p>
            </div>
            <div id="kcbThreeIMG" className="piece">
                <img src={kcbThree} alt="Portfolio piece"/>
                <p>Logo design, 2020</p>
            </div>
            <div id="kcbHatIMG" className="piece">
                <img src={kcbHat} alt="Portfolio piece"/>
                <p>Merchandise mockup, 2020</p>
            </div>
            <div id="kcbJersOneIMG" className="piece">
                <img src={kcbJers1} alt="Portfolio piece"/>
                <p>Jersey mockup, 2020</p>
            </div>
            <div id="kcbJersTwoIMG" className="piece">
                <img src={kcbJers2} alt="Portfolio piece"/>
                <p>Jersey mockup, 2020</p>
            </div>
            <div id="kcbJersThreeIMG" className="piece">
                <img src={kcbJers3} alt="Portfolio piece"/>
                <p>Jersey mockup, 2020</p>
            </div>
            <div id="tammsOneIMG" className="piece">
                <img src={tammsOne} alt="Portfolio piece"/>
                <p>Label design, 2020</p>
            </div>
            <div id="tammsTwoIMG" className="piece">
                <img src={tammsTwo} alt="Portfolio piece"/>
                <p>Label mockup, 2020</p>
            </div>
        </section>
    )
}

export default Misc;