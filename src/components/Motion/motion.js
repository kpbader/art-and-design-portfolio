import "./motion.css";
import laVintage from "../../assets/images/Main_LA.mp4";
import canIKickIt from "../../assets/images/main-comp-nyc.mp4";
import vfx from "../../assets/images/VFX_best.mp4";
// import { LazyLoadImage } from 'react-lazy-load-image-component';


function Motion() {

    return (
        <section id="motionProjects">
            <div id="nycAnime" className="piece">
                <video width="750" height="400" controls >
                    <source src={canIKickIt} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
            <div id="vfxAnime" className="piece">
                <video width="750" height="400" controls>
                    <source src={vfx} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
            <div id="laAnime" className="piece">
                <video width="750" height="400" controls >
                    <source src={laVintage} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <p>Untitled animation (created with Adobe After Effects)</p>
            </div>
        </section>
    )
}

export default Motion;