import { Component } from "react";
import "./NavbarStyles.css";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Navbar extends Component {
    state={clicked: false}
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})

    }
    render () {
    return (
        <>
            <nav>
                <div>
                    <ul id="Navbar" className={this.state.clicked ? "#Navbar active" : "#Navbar"}>
                        <li><a className="active" href="/"> Inicio</a></li>
                        <li><a href="/pageWave/Cards-First-Wave/First-Wave-Books">Oleada 1</a></li>
                        <li><a href="/pageWave/Cards-Second-Wave/Second-Wave-Books">Oleada 2</a></li>
                        <li><a href="/">Contacto</a></li>
                    </ul>
                </div>
                <div id="Mobile" onClick={this.handleClick}>
                    <i id="Bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    )
}
}
export default Navbar;
