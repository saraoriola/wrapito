// Componente1.jsx
import React from 'react';
import Button from '../components/Button/Button';

const Component1 = () => {
  const handlePostClick = () => {
    console.log('Lógica para el Componente1');
  };

  return (
    <div>
      {/* Otros elementos */}
      <Button texto="Enviar a Ruta A" onClick={handlePostClick} url="http://www.google.com/" />
    </div>
  );
};

export default Component1;
