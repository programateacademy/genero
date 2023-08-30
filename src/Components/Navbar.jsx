import React, { Component } from "react";
import "./NavbarStyles.css";
import { HashLink as Link } from 'react-router-hash-link';
import photo from '../assets/img/imagenav.jpeg';
import AccessibilityComponent from './AccessibilityComponent'; // Asegúrate de que la ruta sea correcta
import disabledLogo from '../assets/img/disabled-logo.png'; // Asegúrate de que la ruta sea correcta

class Navbar extends Component {
    state = {
        clicked: false,
        showAccessibility: false,
        showMenu: false // Nuevo estado para controlar el menú de opciones
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleAccessibilityClick = () => {
        this.setState({ showAccessibility: !this.state.showAccessibility });
    }

    handleMenuClick = () => {
        this.setState({ showMenu: !this.state.showMenu }); // Cambia el estado del menú al hacer clic en el botón
    }

    scrollToBottom = () => {
        const element = document.getElementById('bottom-section'); // Cambia 'bottom-section' por el ID de tu sección inferior
        element.scrollIntoView({ behavior: 'smooth' });
    }

    render () {
        return (
            <>
                <nav>
                    <div>
                        <ul id="Navbar" className={this.state.clicked ? "#Navbar active" : "#Navbar"}>
                            <li><a className="active" href="/"> Inicio</a></li>
                            <li><Link to="/#about" smooth={true}>Sobre</Link></li>
                            <li><a href="/pageWave/Cards-First-Wave/First-Wave-Books">Oleada 1</a></li>
                            <li><a href="/pageWave/Cards-Second-Wave/Second-Wave-Books">Oleada 2</a></li>
                            <li><Link to="/#Footer" smooth={true}>Contacto</Link></li>
                        </ul>
                    </div>
                    <div id="Mobile" onClick={this.handleClick}>
                        <i id="Bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
                <img id="photonav" src={photo} alt="foto_menu" />
                <button className="accessibility-button" onClick={this.handleAccessibilityClick}>
                    <img src={disabledLogo} alt="Logo de persona discapacitada" />
                </button>
                <div className={`menu-overlay ${this.state.showMenu ? 'show' : ''}`}>
                    <div className="menu-content">
                        <button className="close-menu-button" onClick={this.handleMenuClick}>
                            <i className="fas fa-times"></i>
                        </button>
                        {this.state.showAccessibility && <AccessibilityComponent />}
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;





