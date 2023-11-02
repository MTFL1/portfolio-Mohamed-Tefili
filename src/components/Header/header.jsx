import './header.scss'
import Linkedin from '../../styles/img/linkedin.png'

function Header() {
    return (
    <header>
        <h1>Mohamed Tefili<span>Intégrateur Web</span></h1>
        <nav>
            <a className="no-underline" href="#project">Projets</a>
            <a className="no-underline" href="#contactMoov">Contact</a>
            <img src={Linkedin} alt="logo Linkedin" />
        </nav>
    </header>
    );
  }
  
  export default Header;