import "./home.css";
// import photoRow from "../../assets/images/splash-page-v1.jpg";
import photoRowTwo from "../../assets/images/splash-page-2.jpg";
// import photoRowThree from "../../assets/images/splash-page-3.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Home() {
    return (
        
        <LazyLoadImage src={photoRowTwo} className="splash-photo" alt="row of same photo"/>
    )
}

export default Home