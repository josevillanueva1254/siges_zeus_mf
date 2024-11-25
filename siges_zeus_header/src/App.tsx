import React from 'react';
import { Header } from './modules/header';

const App: React.FC = () => {
  const handleAlertClick = () => {
    console.log('Alerta clickeada');
  };

  const handleProfileClick = () => {
    console.log('Perfil clickeado');
  };

  return (
    <div>
      <Header
        userName="John Doe"
        onAlertClick={handleAlertClick}
        onProfileClick={handleProfileClick}
      />
    </div>
  );
};

export default App;
