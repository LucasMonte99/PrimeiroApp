import React from 'react';
import './navegation.css';
import { Link } from 'react-router-dom';

function Navegation(){
    return(
        <div>
            <div className='navegation-content'>
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to={'/'}>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/contato'}>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/fotos'}>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/comentarios'}>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Navegation;