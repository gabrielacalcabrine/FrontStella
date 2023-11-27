import React, { useState } from 'react';
import Botao from './Botao';

function NumeroDaSorte() {
  const [numeroSorte, setNumeroSorte] = useState(null);

  const handleNumeroGerado = (numero) => {
    setNumeroSorte(numero);
  };

  return (
    <div>      
      <Botao onNumeroGerado={handleNumeroGerado} />
      {numeroSorte !== null && (
        <h1>{numeroSorte}</h1>
      )}
    </div>
  );
};

export default NumeroDaSorte;