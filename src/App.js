import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import pageWave from './Page/pageWave/pageWave';
import Home  from './Page/homePage/Home';
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
      </div>
    </BrowserRouter>



  )



}

export default App;
