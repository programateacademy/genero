import { Component } from "react";
import "./NavbarStyles.css";
import { HashLink as Link } from 'react-router-hash-link';
import photo from '../assets/img/imagenav.jpeg'
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Navbar extends Component {
    
    state={clicked: false}
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})

    }

    scrollToBottom = () => {
        const element = document.getElementById('bottom-section'); // Cambia 'bottom-section' por el ID de tu sección inferior
        element.scrollIntoView({ behavior: 'smooth' })
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
<<<<<<< HEAD
                        <li><a onClick={this.scrollToBottom}>Contacto</a></li>
=======
                        <li><Link to="/#Footer" smooth={true}>Contacto</Link></li>
>>>>>>> ef55f132f16d4bc5f5c6ea111b1153471e742f39
                    </ul>
                    
                </div>
                <div id="Mobile" onClick={this.handleClick}>
                    <i id="Bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
            <img id="photonav" src={photo} alt="foto_menu" />
        </>
    )
}
}
export default Navbar;
