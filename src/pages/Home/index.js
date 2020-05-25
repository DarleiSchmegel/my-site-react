import React from 'react';

import './styles.css';

import Eu from '../../images/eu.png'
//import logoImg from '../../assets/logo.svg';
export default function Home() {
     
    

    return (
        <div className="home">
            
            <div className="descriton">
            <img src={Eu} alt="Darlei Schmgel" id="eu"/>
            <h3>Darlei Matheus Schmegel</h3>
            <h5>Estudante de Engenharia de Computação na Universidade Federal de Pelotas.</h5>
            </div>
        </div>
    )
};
//<img src={Eu} alt="Darlei Schmgel" id="eu"/>