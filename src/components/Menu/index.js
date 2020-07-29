import React from 'react'
import Logo from '../../assets/img/souzaFlix.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Souzaflix logo" />
            </a>

            <ButtonLink className="ButtonLink" to="/cadastro/video">
               Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;