import React from 'react';
import { Header } from './modules/header';

const App: React.FC = () => {
  const handleLogoClick = () => {
    console.log('Redirigiendo a la página principal');
  };

  return (
    <div>
      <Header
        userName="John Doe"
        onLogoClick={handleLogoClick}
      />
    </div>
  );
};

export default App;
