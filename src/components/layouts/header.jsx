import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <ul>
                <li><Link to="/sobre-mi">Sobre mi</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li id="logo"><Link to="">VR</Link></li>
                <li><Link to="/crear-proyecto">Crear proyecto</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </header>
    );
}
 
export default header