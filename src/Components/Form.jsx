import { useState } from "react";
import Card from "./Card";

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [curso, setCurso] = useState("");
    const [error, setError] = useState("");
    const [estudiante, setEstudiante] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        
        if (!nombre || nombre.length < 3 || nombre.startsWith(" ")) {
            setError("El nombre debe tener al menos 3 caracteres y no debe iniciar con un espacio.");
            return;
          }
        if (!apellido || apellido.length < 6) {
            setError("El apellido debe tener al menos 6 caracteres.");
            return;
        }
        setEstudiante({ nombre, apellido, curso });
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type="text"
                placeholder="Curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
            />
            <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {estudiante && <Card nombre={estudiante.nombre} apellido={estudiante.apellido} curso={estudiante.curso} />}
    </div>
  )
}

export default Form