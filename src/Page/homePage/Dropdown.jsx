import React, { useState } from 'react'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'; 
 
function App() { 
  const [dropdown, setDropdown] = useState(false); 
 
  const abrirCerrarDropdown = () => { 
    setDropdown(!dropdown); 
  } 
 
  const acciónEdición = () => { 
    alert("Abriendo libro 1"); 
  } 
 
  return ( 
    <div className="App"> 
      <br /><br /><br /><br /><br /><br /> 
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} > 
        <DropdownToggle caret className="botonDropdown"> 
          Dropdown Borrador 
        </DropdownToggle> 
 
        <DropdownMenu className="dropdown-cuerpo"> 
          <DropdownItem header className="dropdwon-header">Encabezado</DropdownItem> 
          <DropdownItem divider className="dropdwon-item" /> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 1</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 2</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 3</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 4</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 5</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 6</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 7</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 8</DropdownItem> 
          <DropdownItem onClick={() =>acciónEdición()}>Libro 9</DropdownItem> 
        </DropdownMenu> 
 
 
      </Dropdown> 
 
 
    </div> 
  ) 
 
} 
 
 
export default Dropdown;
