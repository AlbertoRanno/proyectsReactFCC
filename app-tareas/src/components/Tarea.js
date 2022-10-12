import React from "react";
import "../style-sheets/Tarea.css"
import { FaWindowClose } from 'react-icons/fa';

function Tarea( { id, texto, completada, completarTarea, eliminarTarea }) {
return (
  <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
    <div className="tarea-texto"
    onClick={() => completarTarea(id)}>
      {texto}
    </div>
    <div className="tarea-contenedor-iconos"
    onClick={()=> eliminarTarea(id)}>
     <FaWindowClose className="tarea-icono" />
    </div>
  </div>
)

}

export default Tarea