import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}
export default App;