import React from 'react';
import './stylesHeader.css';
import Logo from '../../assets/Artboard 352500.png';
import { Link } from 'react-router-dom';



function Header() {






    return (
        <header>
            <Link style={{textDecoration:'none'}} to={'/'}>
            <img id='logo' src={Logo} />
            </Link>
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
        </header>
    )
}


export default Header;