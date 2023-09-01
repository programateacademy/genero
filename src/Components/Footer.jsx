import React from "react";
import logo_educamas from '../assets/img/Logo-educamas.png';
import SocialIcon from './SocialIcon';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    { href: 'https://web.facebook.com/profile.php?id=100071201326480', icon: faFacebook },
    { href: 'https://www.linkedin.com/company/educam%C3%A1s/?viewAsMember=true', icon: faLinkedin },
    { href: 'https://www.instagram.com/somoseducamas/', icon: faInstagram },
];

const footerLinks = [
    { title: 'Recursos', links: [{ text: 'Literatura' }, { text: 'Historia' }, { text: 'Videos' }, { text: 'Imagenes' }] },
    { title: 'Acerca de', links: [{ text: 'Feminismo' }, { text: 'Temas de genero' }, { text: 'Nous Cims Genero' }] },
    { title: 'Contacto', links: [{ text: 'Politica de privacidad' }, { text: 'Terminos de uso' }] },
];

const Footer = () => {
    return (
        <div id="Footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    {footerLinks.map((section, index) => (
                        <div className="sb_footer-links_div" key={index}>
                            <h4>{section.title}</h4>
                            {section.links.map((link, linkIndex) => (
                                    <p key={linkIndex}>{link.text}</p>
                            ))}
                        </div>
                    ))}
                    <div className="sb_footer-links_div">
                        <img src={logo_educamas} alt="Logo_educamas"></img>
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
                        {socialLinks.map((link, index) => (
                            <SocialIcon key={index} href={link.href} icon={link.icon} />
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Footer;
