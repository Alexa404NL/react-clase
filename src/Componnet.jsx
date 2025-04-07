
import React from 'react';
function Boton ({texto, onClick}){
    return (
        <button onClick={onClick}><h1>{texto}</h1>
        </button>
        // al poner prop.text, se le pasa el valor de la propiedad text al componente Boton
    );
    
}
export default Boton;