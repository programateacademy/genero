import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="Menu" >

            <ul className="Navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pageWave/Cards-First-Wave/First-Wave-Books">Oleada 1</Link></li>
              <li><Link to="/pageWave/Cards-Second-Wave/Second-Wave-Books">Oleada 2</Link></li>
              <li><a href="/pageWave">Contacto</a></li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
      </div>
    </BrowserRouter>
  );
}

export default App;


