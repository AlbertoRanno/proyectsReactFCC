import React from "react"; 
import "../style-sheets/Pantalla.css"

function Pantalla ( { input } ){
    return (
      <div className="input">
        {input}
      </div>
    )
}

export default Pantalla

/* También se podría definir:
const Pantalla = () => (
    

) 
Esto se usa para componentes sencillos
*/