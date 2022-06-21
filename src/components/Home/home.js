import "./home.css";
// import photoRow from "../../assets/images/splash-page-v1.jpg";
import photoRowTwo from "../../assets/images/splash-page-2.jpg";
// import photoRowThree from "../../assets/images/splash-page-3.jpg";


function Home() {
    return (
        // <div className="splash-photo"></div>
        <img src={photoRowTwo} className="splash-photo" alt="row of same photo"/>
    )
}

export default Home