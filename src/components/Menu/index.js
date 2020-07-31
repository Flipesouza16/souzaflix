import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/souzaFlix.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Souzaflix logo" />
      </Link>

      <ButtonLink className="ButtonLink" to="/cadastro/video">
        Novo Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
