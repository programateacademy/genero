import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import dashboard from './Page/homePageDashboard/dashboard';
import Home from './Page/homePage/Home';
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
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={dashboard} />
            <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
