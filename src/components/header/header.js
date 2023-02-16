import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.png';


function Header(){
    return(
        <header>
            <img className='logo' src={Logo} />
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;