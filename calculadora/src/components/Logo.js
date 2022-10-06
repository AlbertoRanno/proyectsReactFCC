import React from "react";
import logo from "../images/freecodecamp-logo.png"
import "../style-sheets/Logo.css"

function Logo (){
    return (
      <div className='FCC-logo-contenedor'>
        <img
        src={logo}
        className="FCC-logo"
        alt="Logo de FCC" />
      </div>
    )
}

export default Logo