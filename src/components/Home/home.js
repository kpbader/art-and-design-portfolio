import "./home.css";
// import photoRow from "../../assets/images/splash-page-v1.jpg";
import photoRowTwo from "../../assets/images/splash-page-2.jpg";
// import photoRowThree from "../../assets/images/splash-page-3.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <>
            <div id="splash-container">
                <Fade up>
                    <LazyLoadImage src={photoRowTwo} className="splash-photo" alt="row of same photo" />
                    <LazyLoadImage src={photoRowTwo} className="splash-photo" alt="row of same photo" />
                </Fade>
            </div>
        </>
    )
}

export default Home