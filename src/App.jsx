import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const [infoEstudiante, setinfoEstudiante] = useState(null);
  const [error, setError] = useState('');
  
  const handleFormSubmit = (data) => {
    if (validacion(data)) {
      setinfoEstudiante(data);
      setError('');
    } else {
      setError('Por favor chequea que la información sea correcta');
    }
  };
  const validacion = ({ nombre, apellido }) => {
    return (
      nombre.length >= 3 && !nombre.startsWith(' ') &&
      apellido.length >= 6
    );
  };
  return (
    <div className="App">
      <h1>Formulario de Estudiante</h1>
      <Form onSubmit={handleFormSubmit} />
      {error && <p className="error">{error}</p>}
      {infoEstudiante && <Card {...infoEstudiante} />}
    </div>
  )
}

export default App
