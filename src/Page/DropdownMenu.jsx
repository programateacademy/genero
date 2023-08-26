import React from 'react'
import {Link } from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <ul className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li className="Dropdown">
        <span id="title_oleada">Recursos</span>
        <ul className="DropdownContent">
            <li><Link to="/pageWave/Cards-First-Wave/First-Wave-Books">Oleada 1</Link></li>
            <li><Link to="/pageWave/Cards-Second-Wave/Second-Wave-Books">Oleada 2</Link></li>
        </ul>
        </li>
        <li><a href="/pageWave">Contacto</a></li>
    </ul>
    )
}

export default DropdownMenu