const Card = ({ nombre, apellido, curso }) => {
  return (
    <>
        <h3>Información del Estudiante:</h3>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Curso: {curso}</p>
    </>
  )
}

export default Card