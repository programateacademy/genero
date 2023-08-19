import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import pageWave from './Page/pageWave/pageWave';
import Home  from './Page/homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <div>
                <ul className="Navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pageWave">Page Wave</Link></li>
                    <li><a href="index.htm">Recursos</a></li>
                    <li><a href="index.htm">Contacto</a></li>
                </ul>
            </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave" exact component={pageWave} />
      </div>
    </BrowserRouter>



  )



}

export default App;
