import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

//import logo from '../../images/logo.png';

//import vbsconstrutora from '../../images/vbsconstrutora.png';
export default function Menu() {
    return (
      <div className="container-nave navbar-dark bg-dark">
        <header id="cabecalho">
            <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                <h1>Darlei</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    <ul className="navbar-nav ml-auto">&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/">Home</Link>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/portifolio">Portifólio</Link>
                        </li>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/about">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </header>
      </div>
    );
};



















/*      <div className="container-fluid p-0">
      
      

        <header  className="navbar-header">
        
          <nav className="navbar navbar-expand-md navbar-light bg-light">
          <img src = {logo} width="220" alt = "Tindev"/>
            {/*<a  className="navbar-brand" href="">
            <img src = {logo} width="120" alt = "Tindev"/>
            </a>
            }
            <button className="navbar-toggler active" type="button" data-toggle="collapse"
              data-target="#navbarMainToggler" aria-controls="navbarMainToggler"
              aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>        
            </button>
           
            <section className="collapse navbar-collapse" aria-expanded="false" id="navbarMainToggler">
              <ul className="nad navbar-nav ml-auto">
                <li className="scroll"><Link className="nav-item nav-link" to="/">Home</Link> </li> 
                <li className="scroll"><Link className="nav-item nav-link" to="/About">Sobre</Link> </li>
                
              </ul>
            </section>
          </nav>
        </header>
        
      </div>*/