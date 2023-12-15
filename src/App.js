import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import Dashboard from './Components/Dashboard';  // Import the graphic container
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="outer-container">
        <div className="sticky-navbar">
          <Navbar />
        </div>
        <div className="app-container">
          <div className="content">
            {/* Rutas existentes */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
            </Switch>

            {/* New route for the graphic container */}
            <Route path="/Dashboard" component={Dashboard} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;



