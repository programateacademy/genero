import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import Dashboard from './Components/Dashboard';  // Import the graphic container
=======
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
>>>>>>> 6b89638dff98c26533f20c329fe290f7d1b9f51d
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
<<<<<<< HEAD
            {/* Rutas existentes */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
            </Switch>

            {/* New route for the graphic container */}
            <Route path="/Dashboard" component={Dashboard} />
=======
            <Route path="/" exact component={Home} />
            <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
>>>>>>> 6b89638dff98c26533f20c329fe290f7d1b9f51d
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
<<<<<<< HEAD
};
=======
}

>>>>>>> 6b89638dff98c26533f20c329fe290f7d1b9f51d

export default App;



