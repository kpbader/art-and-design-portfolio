import './header.css';
import Nav from '../Nav/nav';

function Header() {
    return (
        <header>
           <h1>
                <a data-testid="link" href="/" className="header">
                    KP Bader Art + Design
                </a>
            </h1> 
            <Nav />
        </header>
    );
}

export default Header;