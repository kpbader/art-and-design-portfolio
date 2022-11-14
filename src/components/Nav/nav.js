import { Link } from "react-router-dom";
import { useState } from "react";
import './nav.css';
import { Button, Offcanvas } from 'react-bootstrap'
// import { render } from "@testing-library/react";

function Nav() {

    // const location = useLocation()

    // offCanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const onClick = () => setShow(true);

    return (
        <>
            
                <Button id="nav-container" className="openbtn" onClick={handleShow}>
                    ☰
                </Button>
      

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/art-and-design-portfolio" className="tab" >Home</Link>
                            <Link to="/Portfolio" className="tab" >Portfolio</Link>
                            <a href="https://www.etsy.com/shop/kpbaderart?ref=shop_sugg" target="_blank" rel="noreferrer">
                                Shop
                            </a>
                            <a href="https://drive.google.com/file/d/1TLtqU525SZYZX6LOYLrD6Caq5_iOcl27/view?usp=sharing" target="_blank" rel="noreferrer">
                                Resume
                            </a>
                            <Link to="/Contact" className="tab" >Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >

        </>
    )

}


export default Nav;