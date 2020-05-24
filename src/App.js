import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

import Routes from './routes';
class App extends Component {
  render() {
    return (
      <>
      
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            
            <li><Link to="/main">Main</Link></li>
          </ul>

          <hr />
          
          <Routes />
          
        </div>
      </HashRouter>
      </>
    );
  }
}
export default App;