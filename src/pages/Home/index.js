import React from 'react';

import './styles.css';

import Eu from '../../images/eu.png'
//import logoImg from '../../assets/logo.svg';
export default function Home() {
     
    

    return (
        <div className="home">
            <div className="intro">


                <div className="descriton">
                    <img src={Eu} alt="Darlei Schmgel" id="eu"/>
                    <h3>Darlei Matheus Schmegel</h3>
                    <h5>Aluno do quinto semestre de Engenharia de Computação na Universidade Federal de Pelotas.</h5>
                </div>
            </div>

                <div className="contatos">
                    <h3 color="black" >SE INTERESSOU PELO MEU TRABALHO?</h3>
                    <p>Entre em contato para conversarmos</p>
                    <a href="mailto:darleischmegel94@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope-square">  darleischmegel94@gmail.com</i> 
                    </a>
                    <p>Também pode me chamar no Whatsapp ou me encontrar nas redes sociais</p>
                </div>
        </div>
    )
};
//<img src={Eu} alt="Darlei Schmgel" id="eu"/>