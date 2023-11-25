import React, { useState } from 'react';
import Botao from './Botao';
import Popup from './Poup';

function NumeroDaSorte() {
  const [valorInput, setValorInput] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  }
  const handleSubmit = (event) => { 
    event.preventDefault()   
    setMostrarPopup(true);
  }
  const fecharPopup = () => {
    setMostrarPopup(false);
    setValorInput('');
  }
  return (
    <div>     
      ##receber numero da sorte de forma interna aqui 
      <form onSubmit={handleSubmit} onFocus = {fecharPopup} onChange={handleInputChange} >
      <Botao/>   
      </form>         
      {mostrarPopup && (
        <Popup message={valorInput} onClose={fecharPopup} />
      )}
    </div>
  );
}

export default NumeroDaSorte;