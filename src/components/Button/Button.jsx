import React from 'react';

const Button = ({ texto, onClick, url }) => {
  const handleClick = () => {
    console.log(`Realizando solicitud POST a: ${url}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export default Button;
