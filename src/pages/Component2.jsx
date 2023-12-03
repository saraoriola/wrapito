// Componente1.jsx
import React from 'react';
import Button from '../components/Button/Button';

const Component2 = () => {
  const handlePostClick = () => {
    console.log('Lógica para el Componente2');
  };

  return (
    <div>
      {/* Otros elementos */}
      <Button texto="Enviar a Ruta B" onClick={handlePostClick} url="http://www.classroom.com/" />
    </div>
  );
};

export default Component2;
