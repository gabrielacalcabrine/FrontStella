import React, { useState } from 'react';

const BotaoLayout = () => {
  const [textoBotao, setTextoBotao] = useState('branco');
  const[corFundo, setCorFundo] = useState('');

  const handleClick = () => {
    // Alterna o texto do botão entre 'branco' e 'preto'
    setTextoBotao((cor) => (cor === 'branco' ? 'preto' : 'branco'));    
  };

  return (
    <button className = "botaoLayout" onClick={handleClick}>
      {textoBotao}
    </button>
  );
};

export default BotaoLayout;