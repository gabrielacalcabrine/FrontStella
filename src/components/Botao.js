import React from 'react';
import '../styles/Botao.css';
import axios from 'axios';

const Botao = ({ onNumeroGerado }) => {
  const acaoClick = async () => {
    
      const resposta = await axios.get('https://localhost:7071/NumeroSorte'); 
      const numeroSorte = resposta.data;
      onNumeroGerado(numeroSorte);
    
  };

  return (
    <button className="botao-rosa" onClick={acaoClick}>
      Enviar
    </button>
  );
};

export default Botao;