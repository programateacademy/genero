import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import pageWave from './pageWave/pageWave';
import Home  from './homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <div>
                <ul className="Navbar">
                    <li><a className="active" href="index.htm">Inicio</a></li>
                    <li><a href="index.htm">Sobre</a></li>
                    <li><a href="index.htm">Recursos</a></li>
                    <li><a href="index.htm">Contacto</a></li>
                </ul>
            </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave" exact component={pageWave} />
      </div>
    </BrowserRouter>
  );
};

export default App;
