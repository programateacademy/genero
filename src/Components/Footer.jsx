import React from "react";
import './Footer.css';
import logo_educamas from '../assets/img/Logo-educamas.png'


const Footer = () => {
    return (
        <div id="Footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Recursos</h4>
                        <a href="index.html">
                            <p>Literatura</p>
                        </a>
                        <a href="index.html">
                            <p>Historia</p>
                        </a>
                        <a href="index.html">
                            <p>Videos</p>
                        </a>
                        <a href="index.html">
                            <p>Imagenes</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Acerca de</h4>
                        <a href="index.html">
                            <p>Feminismo</p>
                        </a>
                        <a href="index.html">
                            <p>Temas de genero</p>
                        </a>
                        <a href="index.html">
                            <p>Nous Cims Genero</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Contacto</h4>
                        <a href="index.html">
                            <p>Politica de privacidad</p>
                        </a>
                        <a href="index.html">
                            <p>Terminos de uso</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <img src={logo_educamas} alt="Logo_educamas"></img>
                        <div className="wrapper">
                            
                        </div>
                        {/*
                        <div className="Socialmedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={linkedlin} alt=""></img></p>
                            <p><img src={Insta} alt=""></img></p>
                        </div>
                        */}                        
                    </div>
                </div>
                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Codeinn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="index.html"><div><p>Terms & conditions</p></div></a>
                        <a href="index.html"><div><p>Privacy</p></div></a>
                        <a href="index.html"><div><p>Security</p></div></a>
                        <a href="index.html"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer