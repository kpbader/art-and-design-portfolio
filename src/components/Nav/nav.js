import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";
import './nav.css';
import { Button, Offcanvas } from 'react-bootstrap'

function Nav() {

    const location = useLocation()

    // offCanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onClick = () => setShow(true);
    // console.log(location.pathname);

    const selectedTab = location.pathname;

    function activeTab(path) {
        if (selectedTab !== path) {
            return;
        } else {
            return { color: "silver" }
        }
    }

    return (
        <>
            <div id="nav-container">
                <Button className="openbtn" onClick={handleShow}>
                    ☰
                </Button>
            </div>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/" className="tab">Home</Link>
                            <Link to="/Portfolio" className="tab">Portfolio</Link>
                            <a href="https://drive.google.com/file/d/1CaexgmFdh3urSBDcrvxEVSO9cRZvARSp/view" target="_blank" rel="noreferrer">
                                Resume
                            </a>
                            <Link to="/Contact" className="tab">Contact</Link>

                        </ul>

                    </section>

                </Offcanvas.Body>
            </Offcanvas >

        </>
    )

}

export default Nav;