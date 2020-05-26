import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, BrowserRouter } from "react-router-dom";

//import Home from './pages/Home';
//import About from './pages/About';

import Routes from './routes';
import Menu from './Menu';
import Fixed from './Fixed'

import Footer from './Footer'
class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
       
        <HashRouter basename="/">
        <div>
            
            <Menu />
          

        
          <Routes />
          <Footer />
          <Fixed />
        </div>
      </HashRouter>
        </Switch>
      </BrowserRouter>
      
      
    );
  }
}
export default App;
//<div className="container-fluid">