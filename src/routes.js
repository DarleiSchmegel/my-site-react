import React from 'react';
import { BrowserRouter, Switch , Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';
import About from './pages/About';

export default function Routes() {
    return(
        <HashRouter basename="/">
       
                
                <Route path="/" exact component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/about" component={About} />
          
        </HashRouter>
    );
}