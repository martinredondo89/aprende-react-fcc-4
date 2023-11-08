
import './App.css';
import MostrarLogo from './componentes/MostrarLogo.js';
import TareaFormulario from './componentes/TareaFormulario.js';



function App() {
  return (
    <div className='aplicacion-tareas'>
      <MostrarLogo />
      <div className='tareas-lista-principal'>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
