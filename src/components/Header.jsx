import React from 'react';
// Importando os ícones que acabamos de instalar
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#projects">Projetos</a>
        <a href="#projects">Tecnologias</a>
        <a href="#about">Sobre mim</a>
      </nav>
      <div className="social-links">
        <a href="https://github.com/danielbricola" target="_blank" rel="noopener noreferrer">
          <FaGithub size={36} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-bricola/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={36} />
        </a>
      </div>
    </header>
  );
}

export default Header;