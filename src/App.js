import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PageWave from './Page/pageWave/pageWave';
import Home from './Page/homePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DropdownMenu from './Page/DropdownMenu';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className='Menu'>
            <DropdownMenu />
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/pageWave/:cardsProp/:booksProp" component={PageWave} />
      </div>
    </BrowserRouter>
  );
}

export default App;


