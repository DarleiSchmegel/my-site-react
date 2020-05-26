import React from 'react';
import './style.css';
export default function Footer() {
    return (
        <footer id="rodape">
            <p> Com ❤ DMSchmegel</p>
            <div className="social">
                <a className="bt-social" href="https://www.linkedin.com/in/darlei-schmegel-9766981a5/" target="_blank" rel="noopener noreferrer">
                    <i id="social" className="fab fa-linkedin"></i>
                </a>

                <a className="bt-social" href="https://www.instagram.com/darleischmegel/?hl=pt-br" target="_blank" rel="noopener noreferrer">  
                    <i id="social" className="fab fa-instagram-square"></i>
                </a>

                <a className="bt-social" href="https://www.facebook.com/profile.php?id=100007584196535" target="_blank" rel="noopener noreferrer">
                    <i id="social" className="fab fa-facebook-square"></i>
                </a>

            </div> 
        </footer>
    );
};
        