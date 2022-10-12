import './App.css';
import  "./style-sheets/Tarea.css"
import logo from "./images/freecodecamp-logo.png"
import ListaDeTareas from './components/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='fcc-logo-contenedor'>
        <img
         src={logo}
         className='fcc-logo'
         alt='fcc-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>    
    </div>
  );
}

export default App;
