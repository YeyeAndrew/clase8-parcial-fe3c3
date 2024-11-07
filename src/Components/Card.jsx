const Card = ({ nombre, apellido, curso }) => {
  return (
    <div className="Card">
        <h3>Información del Estudiante:</h3>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Curso: {curso}</p>
    </div>
  )
}

export default Card