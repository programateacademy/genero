import { Component } from "react";
import "./NavbarStyles.css";
import { HashLink as Link } from "react-router-hash-link";
import photo from "../assets/img/imagenav.png";


class Navbar extends Component {
  state = { clicked: false, scrolled: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Verifica la posición del scroll, por ejemplo, a 100 píxeles desde arriba
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToBottom = () => {
    const element = document.getElementById("bottom-section");
    element.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <>
        <nav>
          <div>
            <ul
              id="Navbar"
              className={this.state.clicked ? "#Navbar active" : "#Navbar"}
            >
              <li>
                <a className="active" href="/">
                  {" "}
                  Inicio
                </a>
              </li>
              <li>
                <Link to="/#about" smooth={true}>
                  Sobre
                </Link>
              </li>
              <li>
                <a href="/pageWave/Cards-First-Wave/First-Wave-Books">
                  Oleada 1
                </a>
              </li>
              <li>
                <a href="/pageWave/Cards-Second-Wave/Second-Wave-Books">
                  Oleada 2
                </a>
              </li>
              <li>
                <Link to="/#Footer" smooth={true}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div id="Mobile" onClick={this.handleClick}>
            <i
              id="Bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        <img id="photonav" src={photo} alt="foto_menu" className={this.state.scrolled ? "hidden" : ""}/>
      </>
    );
  }
}
export default Navbar;
