import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Page_O from './pageOleada/Page_O';
import Home  from './homePage/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Page_O">Page oleada</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/Page_O" exact component={Page_O} />
      </div>
    </BrowserRouter>
  );
};

export default App;
