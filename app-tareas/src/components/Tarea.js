import React from "react";
import "../style-sheets/Tarea.css"
import { FaWindowClose } from 'react-icons/fa';

function Tarea( { texto }) {
return (
  <div className="tarea-contenedor">
    <div className="tarea-texto">
      {texto}
    </div>
    <div className="tarea-icono">
     <FaWindowClose />
    </div>
  </div>
)

}

export default Tarea