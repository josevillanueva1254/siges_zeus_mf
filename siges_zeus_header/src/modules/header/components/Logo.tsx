import React from 'react';
import LogoPng from '../../../assets/images/Logo_3.png'; // Ajusta la ruta según la ubicación del archivo.

export const Logo: React.FC = () => {
  return (
    <div
      className="demo-logo"
      style={{
        width: '120px',
        height: '31px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={LogoPng}
        alt="Logo ZEUS"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </div>
  );
};
