import kickCan from "../../assets/images/kick-the-can.jpg";
import tableTop from "../../assets/images/table-top-for-2.jpg";
import cardGame from "../../assets/images/card-game_v1.jpg";
import twoRighties from "../../assets/images/2-righties.jpg";
import partyRocks from "../../assets/images/party-on-the-rocks.jpg";
import dinnerParty from "../../assets/images/dinner-party.jpg";
import dancingOnBarrels from "../../assets/images/dancing-on-barrels.jpg";
import twoAssholes from "../../assets/images/2_assholes.jpg";
import cigarFlick from "../../assets/images/burn_and_booze.jpg";
import "./ludicrous.css";

function Ludicrous() {

    return (
        <section id="ludicrousProjects">
            <div id="partyOnTheRocksIMG" className="piece">
                <img src={partyRocks} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="kickCanIMG" className="piece">
                <img src={kickCan} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="tableTopIMG" className="piece">
                <img src={tableTop} alt="Portfolio piece"/>
                <p>Digital collage, 18 x 12" (print), 2021</p>
            </div>
            <div id="cardGameIMG" className="piece">
                <img src={cardGame} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="twoRightiesIMG" className="piece">
                <img src={twoRighties} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="dinnerPartyIMG" className="piece">
                <img src={dinnerParty} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="dancingOnBarrelsIMG" className="piece">
                <img src={dancingOnBarrels} alt="Portfolio piece"/>
                <p>Digital collage, 18 x 12" (print), 2021</p>
            </div>
            <div id="twoAssholesIMG" className="piece">
                <img src={twoAssholes} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
            <div id="cigarFlickIMG" className="piece">
                <img src={cigarFlick} alt="Portfolio piece"/>
                <p>Digital collage, 8 x 12" (print), 2021</p>
            </div>
        </section>
    )
}

export default Ludicrous;