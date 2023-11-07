
import './App.css';
import MostrarLogo from './componentes/MostrarLogo.js';
import Tarea  from './componentes/Tarea.js';



function App() {
  return (
    <div className='aplicacion-tareas'>
      <MostrarLogo />
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <Tarea 
          texto={'Aprender React'}/>
      </div>
    </div>
  );
}

export default App;
