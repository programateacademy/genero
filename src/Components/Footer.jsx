import React from "react";
import './Footer.css';
import logo_educamas from '../assets/img/Logo-educamas.png';
import SocialIcon from './SocialIcon';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    { href: 'https://web.facebook.com/profile.php?id=100071201326480', icon: faFacebook },
    { href: 'https://www.linkedin.com/company/educam%C3%A1s/?viewAsMember=true', icon: faLinkedin },
    { href: 'https://www.instagram.com/somoseducamas/', icon: faInstagram },
];

const footerLinks = [
    { title: 'Recursos', links: [{ href: 'index.html', text: 'Literatura' }, { href: 'index.html', text: 'Historia' }, { href: 'index.html', text: 'Videos' }, { href: 'index.html', text: 'Imagenes' }] },
    { title: 'Acerca de', links: [{ href: 'index.html', text: 'Feminismo' }, { href: 'index.html', text: 'Temas de genero' }, { href: 'index.html', text: 'Nous Cims Genero' }] },
    { title: 'Contacto', links: [{ href: 'index.html', text: 'Politica de privacidad' }, { href: 'index.html', text: 'Terminos de uso' }] },
];


const Footer = () => {
    return (
        <div id="Footer">
<<<<<<< HEAD
            <div className="Footer" id="bottom-section">
                <div className="sb_footer section_padding">
                    <div className="sb_footer-links">
                        {footerLinks.map((section, index) => (
                            <div className="sb_footer-links_div" key={index}>
                                <h4>{section.title}</h4>
                                {section.links.map((link, linkIndex) => (
                                    <a href={link.href} key={linkIndex}>
                                        <p>{link.text}</p>
                                    </a>
                                ))}
                            </div>
                        ))}
                        <div className="sb_footer-links_div">
                            <img src={logo_educamas} alt="Logo_educamas"></img>
                            <div className="wrapper">
                                {/* Contenido adicional aquí */}
                            </div>
=======
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    {footerLinks.map((section, index) => (
                        <div className="sb_footer-links_div" key={index}>
                            <h4>{section.title}</h4>
                            {section.links.map((link, linkIndex) => (
                                <a href={link.href} key={linkIndex}>
                                    <p>{link.text}</p>
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="sb_footer-links_div">
                        <img src={logo_educamas} alt="Logo_educamas"></img>
                        <div className="wrapper">
                            {/* Contenido adicional aquí */}
>>>>>>> 7e185754933e7162ec44c3775b12c8a39e3dce58
                        </div>
                    </div>
                    <hr></hr>
                    <div className="sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                                @{new Date().getFullYear()} Codeinn. All right reserved.
                            </p>
                        </div>
                        <div className="Socialmedia">
                            <nav className='Socialmedia'>
                                {socialLinks.map((link, index) => (
                                    <SocialIcon key={index} href={link.href} icon={link.icon} />
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
         )
}

            export default Footer;
