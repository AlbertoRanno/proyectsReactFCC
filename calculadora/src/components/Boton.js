import React from "react"
import "../style-sheets/Boton.css"

function Boton (props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=")
  /*Si No es un nro, ni el punto, ni el igual... entonces (devuelve true) es un operador */
  };

  /*onClick={() => props.manejarClic(props.children)}
  le paso el prop manejarClick, que traer consigo la función agregarInput,
  y esa función la ejecuto (por eso el () => .. de función anónima) , con el parámetro que
  representa ese botón presionado en particular*/

  /*otra forma para className:
  if (esOperador(props.children)){
     return (
    <div 
    className="boton-contenedor operador"
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
  } else {
    <div 
    className="boton-contenedor"
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  }
   */
  return (
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? "operador" : null }`}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton