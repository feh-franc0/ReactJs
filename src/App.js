import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    //* COMPONENTE(Header) / PROPRIEDADE(name,links)
    <Header name="ProgBr" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;
