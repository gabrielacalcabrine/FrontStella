import './App.css';
import React from 'react';
import Botao from './components/Botao';
import NumeroDaSorte from './components/numeroDaSorte';
import BotaoLayout from './components/BotaoLayout';
import Fundo from './components/Fundo';

function App() {  
  return (
    <div className="App">  
    <h1>Botão Mágico da Stella</h1>    
    <NumeroDaSorte/>    
    <Fundo/>   
    </div>
  );
}

export default App;
