import React from 'react';
import { BrowserRouter, Switch , Route, HashRouter } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function Routes() {
    return(
        
            
            <>       
                <Route path="/" exact component={Home} />
                
                <Route path="/about" component={About} />
            </>  
            
        
    );
}
//<Route path="#" component={() => <h1>Page not found</h1>} />