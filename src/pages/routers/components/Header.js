import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.css"

const Header = () => {

  const location = useLocation();
  
  useEffect(() => {
    // Toda vez que a rota muda
    // Muito utilizado no Google Analytics para ver qual página o usuário entrou
    console.log('Mudou a rota');
  }, [location]);

  return (
    <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="sobre">Sobre</NavLink>
        <NavLink to="login">Login</NavLink>
    </nav>
  )
}

export default Header