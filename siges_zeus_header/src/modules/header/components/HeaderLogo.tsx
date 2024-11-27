import React from 'react';
import { Logo } from './Logo'; // Asegúrate de que esta ruta sea correcta.

interface HeaderLogoProps {
  onClick?: () => void; // Prop opcional para manejar clics en el logo
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer' }}>
    <Logo />
  </div>
);
