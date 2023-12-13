import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import ChartComponent from './Components/ChartComponent';  // Importa el componente de gráfico
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

            {/* Nueva ruta para el componente de gráfico */}
            <Route path="/chart" component={ChartComponent} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;



