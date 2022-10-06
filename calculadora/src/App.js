import './App.css';

import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import Logo from './components/Logo'
import { useState } from "react"
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor)
  };

  const clear = () => { setInput("")};

  const calcularResultado = () => {
    /*Sin este condicional, si apretara el "=" con nada en pantalla (sin ningún input),
    me daría undefined, y lo arrastraría al resto de la concatenación */
    if(input){
    setInput(evaluate(input))
  } else {
    alert("Por favor ingrese valores para realizar los cálculos")
  }
  };

  /* a manejarClic le paso la función agregarInput, 
  para que pueda ejecutarla en el componente. Por eso
  no es "manejarClic{agregarInput()}" */

  return (
    <div className="App">
      <Logo />      
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={clear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
