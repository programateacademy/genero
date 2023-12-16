import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import photo from '../assets/img/imagenav.png';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const scrollToBottom = () => {
    const element = document.getElementById("bottom-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div>
          <ul id="Navbar" className={clicked ? "active" : ""}>
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
            <li><RouterLink to="/Dashboard">Dashboard</RouterLink></li>
          </ul>
        </div>
        <div id="Mobile" onClick={handleClick}>
          <i id="Bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div id="menu-container">
          <img id="photonav" src={photo} alt="foto_menu" className={scrolled ? "hidden faded-out" : ""} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;