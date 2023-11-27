import React, { useState, useEffect } from 'react';

const Fundo = () => {
  const [corFundo, setCorFundo] = useState('white');
  const [textoBotao, setTextoBotao] = useState('preto');

  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]);

  const alternarCor = () => {
    setCorFundo(corFundo === 'white' ? 'black' : 'white');
    setTextoBotao((cor) => (cor === 'branco' ? 'preto' : 'branco'));  
  };

  return (
    <div>
      <button onClick={alternarCor}>{textoBotao}</button>
    </div>
  );
};

export default Fundo;