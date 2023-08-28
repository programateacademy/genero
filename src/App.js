import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AccessibilityComponent from './Components/AccessibilityComponent';


const App = () => {
  const [showAccessibility, setShowAccessibility] = useState(false);
  const handleCheckboxChange = () => {
    setShowAccessibility(!showAccessibility);
  };
  return (
    <BrowserRouter>

      <div className="app-container">
        <div className="checkbox_accesibility">
      <label>
        <input
          type="checkbox"
          checked={showAccessibility}
          onChange={handleCheckboxChange}
        />
        Mostrar Accesibilidad
      </label>
      {showAccessibility && <AccessibilityComponent />}
      </div>
        <div className="sticky-navbar">
          <Navbar />

        </div>
        <div className="content">
                
          <Route path="/" exact component={Home} />
          <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />

        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;


