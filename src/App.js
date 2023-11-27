import './App.css';
import React from 'react';
import Botao from './components/Botao';
import NumeroDaSorte from './components/numeroDaSorte';
import Fundo from './components/Fundo';

function App() {  
  return (
    <div className="App">  
    <h1>Botão Mágico da Stella</h1>    
    <h2>Clique para obter seu número da sorte</h2>    
    <NumeroDaSorte/>    
    <Fundo/>   
    </div>
  );
}

export default App;
