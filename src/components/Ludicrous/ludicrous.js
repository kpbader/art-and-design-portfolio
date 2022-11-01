import danceCrumble from "../../assets/images/dance-crumble.jpg";
import sfKing from "../../assets/images/king-SF.jpg";
import kickCan from "../../assets/images/kick-the-can.jpg";
import tableTop from "../../assets/images/table-top-for-2.jpg";
import cardGame from "../../assets/images/card-game_v1.jpg";
import twoRighties from "../../assets/images/2-righties.jpg";
import partyRocks from "../../assets/images/party-on-the-rocks.jpg";
import dinnerParty from "../../assets/images/dinner-party.jpg";
import dancingOnBarrels from "../../assets/images/dancing-on-barrels.jpg";
import twoAssholes from "../../assets/images/2_assholes.jpg";
import cigarFlick from "../../assets/images/burn_and_booze.jpg";
import veniceBeachSF from "../../assets/images/DSC_0633.JPG";
import golfSwingOne from "../../assets/images/Bader_Untitled.JPG";
import ohLookie from "../../assets/images/Bader_Untitled2.JPG";
import bullies from "../../assets/images/bullies.jpg";
import sfMeeting from "../../assets/images/Collage_9-17-22.jpg";
import golfVBC from "../../assets/images/Collage_9-29_v2.jpg";
import eWS from "../../assets/images/Collage_Oct-1_v1.jpg";
import polo from "../../assets/images/polo-in-rubble.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./ludicrous.css";

function Ludicrous() {

    return (
        <section id="ludicrousProjects">
            <div id="poloIMG" className="piece">
                <LazyLoadImage src={polo} alt="Portfolio piece" />
                <p>Digital collage, 6 x 12" (print), 2022</p>
            </div>
             <div id="ewsIMG" className="piece">
                <LazyLoadImage src={eWS} alt="Portfolio piece" />
                <p>Digital collage, 6 x 12" (print), 2022</p>
            </div>
            <div id="golfvbcIMG" className="piece">
                <LazyLoadImage src={golfVBC} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2022</p>
            </div>
            <div id="sfMeetingIMG" className="piece">
                <LazyLoadImage src={sfMeeting} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2022</p>
            </div>
             <div id="danceCrumbleIMG" className="piece">
                <LazyLoadImage src={danceCrumble} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2022</p>
            </div>
            <div id="sfKingIMG" className="piece">
                <LazyLoadImage src={sfKing} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2022</p>
            </div>
            <div id="partyOnTheRocksIMG" className="piece">
                <LazyLoadImage src={partyRocks} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="kickCanIMG" className="piece">
                <LazyLoadImage src={kickCan} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="tableTopIMG" className="piece">
                <LazyLoadImage src={tableTop} alt="Portfolio piece" />
                <p>Digital collage, 18 x 12" (print), 2021</p>
            </div>
            <div id="cardGameIMG" className="piece">
                <LazyLoadImage src={cardGame} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="twoRightiesIMG" className="piece">
                <LazyLoadImage src={twoRighties} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="dinnerPartyIMG" className="piece">
                <LazyLoadImage src={dinnerParty} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="dancingOnBarrelsIMG" className="piece">
                <LazyLoadImage src={dancingOnBarrels} alt="Portfolio piece" />
                <p>Digital collage, 18 x 12" (print), 2021</p>
            </div>
            <div id="twoAssholesIMG" className="piece">
                <LazyLoadImage src={twoAssholes} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="cigarFlickIMG" className="piece">
                <LazyLoadImage src={cigarFlick} alt="Portfolio piece" />
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="veniceSFIMG" className="piece">
                <LazyLoadImage src={veniceBeachSF} alt="Portfolio piece" />
                <p>Image transfer on paper, 9 x 22" (print), 2019</p>
            </div>
            <div id="golfOneIMG" className="piece">
                <LazyLoadImage src={golfSwingOne} alt="Portfolio piece" />
                <p>Image transfer on paper, 10 x 20" (print), 2018</p>
            </div>
            <div id="ohLookieIMG" className="piece">
                <LazyLoadImage src={ohLookie} alt="Portfolio piece" />
                <p>Image transfer on paper, 10 x 20" (print), 2018</p>
            </div>
            <div id="bulliesIMG" className="piece">
                <LazyLoadImage src={bullies} alt="Portfolio piece" />
                <p>Image transfer on paper, 10 x 30" (print), 2017</p>
            </div>
        </section>
    )
}

export default Ludicrous;