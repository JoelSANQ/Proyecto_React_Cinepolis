import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import cartelera from "../assets/data/cartelera.json";


function Cartelera() {
  const navigate = useNavigate()

  function verDetalle(pelicula) {
    navigate(`/pelicula/${pelicula.id}`, { state: { pelicula } })
  }

  return (
    <main className="container">
      {cartelera.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  )
}

export default Cartelera