import React from 'react';

import './styles.css';


//import logoImg from '../../assets/logo.svg';
export default function Portfolio() {
     
    

    return (
        <div className="portf-container">
            <h3>Navegue entre as abas para ver os tipos de trabalhos que eu faço.</h3>
            
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-web-tab" data-toggle="tab" href="#nav-web" role="tab" aria-controls="nav-web" aria-selected="true">Web</a>
                    <a className="nav-item nav-link" id="nav-mobile-tab" data-toggle="tab" href="#nav-mobile" role="tab" aria-controls="nav-mobile" aria-selected="false">Mobile</a>
                    <a className="nav-item nav-link" id="nav-backand-tab" data-toggle="tab" href="#nav-backand" role="tab" aria-controls="nav-backand" aria-selected="false">Backand</a>
                    <a className="nav-item nav-link" id="nav-photoshop-tab" data-toggle="tab" href="#nav-photoshop" role="tab" aria-controls="nav-photoshop" aria-selected="false">Photoshop</a>
              
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-web" role="tabpanel" aria-labelledby="nav-web-tab">
                    <h2>Sessão de projetos WEB </h2>
                   <p>
                       Um bom exemplo dos trabalhos desse tipo que eu realizei é essa mesma página que você está neste momento.
                       Esta página web foi desenvolvida com a tecnologia <strong>React</strong> e está hospedada no gh-pages. 
                       Abaixo estão mais projetos que desenvolvi usando <strong>React</strong> e <strong>JavaScript</strong>.
                    </p>
                   <hr/>
                </div>
                
                <div className="tab-pane fade" id="nav-mobile" role="tabpanel" aria-labelledby="nav-mobile-tab">MOBILE</div>
                <div className="tab-pane fade" id="nav-backand" role="tabpanel" aria-labelledby="nav-backand-tab">BACKAND</div>
                <div className="tab-pane fade" id="nav-photoshop" role="tabpanel" aria-labelledby="nav-photoshop-tab">PHOTOSHOP</div>
            </div>
        </div>
    )
};