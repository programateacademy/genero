import { Component } from "react";
import "./NavbarStyles.css";
import { HashLink as Link } from 'react-router-hash-link';
// import photo from '../assets/img/imagenav.jpeg'
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Navbar extends Component {

    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }

    scrollToBottom = () => {
        const element = document.getElementById('bottom-section'); // Cambia 'bottom-section' por el ID de tu sección inferior
        element.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        return (
            <>
                <nav>
                    <div>
                        <ul id="Navbar" className={this.state.clicked ? "active" : ""}>
                            <li><a className="active" href="/">Inicio</a></li>
                            <li><Link to="/#about" smooth={true}>Sobre</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropbtn">Recursos <i className="fas fa-caret-down"></i></a>
                                <div className="dropdown-content">
                                    <a href="/pageWave/Cards-First-Wave/First-Wave-Books">Oleada 1</a>
                                    <a href="/pageWave/Cards-Second-Wave/Second-Wave-Books">Oleada 2</a>
                                </div>
                            </li>
                            <li><Link to="/#Footer" smooth={true}>Contacto</Link></li>
                        </ul>
                    </div>
                    <div id="Mobile" onClick={this.handleClick}>
                        <i id="Bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
                {/*<img id="photonav" src={photo} alt="foto_menu" />*/}
            </>
        )
    }
}
export default Navbar;



