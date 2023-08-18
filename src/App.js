import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import pageWave from './pageWave/pageWave';
import Home  from './homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pageWave">Page Wave</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave" exact component={pageWave} />
        
        <Card
        title="¿Quiénes lideran el movimiento Feminista Chicano?"
        description="El movimiento feminista chicano fue liderado por muchas mujeres notables, incluyendo a Dolores Huerta, Cherríe Moraga, Gloria Anzaldúa, Ana Castillo, Sandra Cisneros, y muchas más."
        imageUrl="https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg"
      />

      </div>
    </BrowserRouter>



  )



}

export default App;
