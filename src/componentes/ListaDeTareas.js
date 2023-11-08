import TareaFormulario from './TareaFormulario.js';
import '../hojas-de-estilo/ListaDeTareas.css'
import React, { useState } from 'react';
import Tarea from './Tarea.js';

function ListaDeTareas() {
    /* Lista de componentes */
    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    
    return (
        /*fragment */
        <>
            <TareaFormulario  onSubmit={agregarTarea}/>
        
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>  
                    <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    
                    />
                    
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;