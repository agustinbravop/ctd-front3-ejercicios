import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from "./components/Button";
import Listado from './components/Listado';

function App() {
  //Necesarias tantas variables??
  let fraseBotonDefault = "Haz Click";
  let fraseBotonUno = "Click si eres valiente";
  let fraseBotonDos = "Prueba otra frase";
  let fraseBotonTres = "Yo controlo el boton";

// Funcion que obtiene una frase del boton, espera un arreglo... REFACTORIZAR 
  function fraseRandom(arreglo = [], fraseActual, fraseUno, fraseDos, fraseTres) {
    let indice = Math.floor(Math.random() * 4); // Numero random
    let arregloDeFrases = [fraseActual, fraseUno, fraseDos];
    arregloDeFrases.push(fraseTres);
    while (fraseActual === arregloDeFrases[indice]) {
      indice = Math.floor(Math.random() * 4);
    }
    fetchData();
    return arregloDeFrases[indice]
  }

  const [fraseChuck, setFraseChuck] = useState("") // Manera de react para crear estados

  async function fetchData() {
    const resultado = await axios.get('https://api.chucknorris.io/jokes/random')
    setFraseChuck(resultado.data.value) // Mandera de react para actualizar estados
  };

  return (
    <div className="app">
      <Button
        defaultFrase={fraseBotonDefault}
        fraseUno={fraseBotonUno}
        fraseDos={fraseBotonDos}
        fraseTres={fraseBotonTres}
        onClick={fraseRandom}
        fraseChuck={fraseChuck}
      />
      <Listado listadoDeFrases={fraseChuck} />
    </div>

  )

}

export default App;
