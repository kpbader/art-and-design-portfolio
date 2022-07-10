import "./motion.css";
import laVintage from "../../assets/images/Main_LA.mp4";
import canIKickIt from "../../assets/images/main-comp-nyc.mp4";
import vfx from "../../assets/images/VFX_best.mp4";


function Motion() {

    return (
        <section id="motionProjects">
            <div id="nycAnime" className="piece">
                <img src={canIKickIt} alt="Animation example"/>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
            <div id="vfxAnime" className="piece">
                <img src={vfx} alt="Animation example"/>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
            <div id="laAnime" className="piece">
                <img src={laVintage} alt="Animation example"/>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
        </section>
    )
}

export default Motion;