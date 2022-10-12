import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea"
import "../style-sheets/ListaDeTareas.css"

function ListaDeTareas(){

  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    //Verifico cadena no vacía:
    if (tarea.texto.trim()){
      //Le quito los espacios en blanco
      tarea.texto = tarea.texto.trim()
      //Genero un array con las tareas previas y la nueva
      const tareasActualizadas = [tarea, ...tareas]
      //Actualizo el estado:
      setTareas(tareasActualizadas)
    }
    // console.log("Tarea agregada")
     console.log(tarea);
  };
  
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map( tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada //si era falso, sera verdadero y viceversa
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  };
    return (
      <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
             />)
          }
        </div>
      </>
    )
}

export default ListaDeTareas