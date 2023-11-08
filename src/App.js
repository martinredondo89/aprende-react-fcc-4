
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.js';
import MostrarLogo from './componentes/MostrarLogo.js';



function App() {
  return (
    <div className='aplicacion-tareas'>
      <MostrarLogo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
