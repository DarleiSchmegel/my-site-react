import React from 'react';
import { HashRouter } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
//import './global.css';

import Routes from './routes';
//import Header from './Header';


function App() {
  return (
    <HashRouter basename='/'>
        <Routes />
    </HashRouter>
    
  );
}

export default App;