import './App.css';
import {useState} from 'react'
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="bienvenido a mi ecommerce"/>
    </div>
  );
}

export default App;
