// src/App.js
import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import './App.css'; // Opcional: para estilos adicionales

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Styled Components Demo</h1>
        <p>Ejemplo básico de uso de styled-components en React.</p>
        <Button>Botón Secundario</Button>
        <Button primary>Botón Primario</Button>
      </Card>
    </div>
  );
}

export default App;
