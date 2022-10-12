import React, { useState } from "react";
import "../style-sheets/TareaFormulario.css"
/* Paquete generador de IDs únicos: npm install uuid */
import { v4 as uuidv4 } from "uuid"


function TareaFormulario (props){
    
  const [input, setInput ] = useState("")

  const manejarCambio = e => {
    setInput(e.target.value);
    //console.log(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault()
    //que no se vuelva a cargar toda la app al enviar el form
    //console.log("enviando formulario");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    //console.log(tareaNueva);
    props.onSubmit(tareaNueva)
  }
  
  return (
      <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
        <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio} />
        <button className="tarea-boton">
        Agregar Tarea
        </button>
      </form>
      
    )
}

export default TareaFormulario