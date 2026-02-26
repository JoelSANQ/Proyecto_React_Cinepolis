import MovieCard from "../components/MovieCard"
import cartelera from "../assets/data/cartelera.json";


function Cartelera({ verDetalle }) {

  
  return (
    <main className="container">
      {cartelera.map((cartelera) => (
        <MovieCard
          key={cartelera.id}
          title={cartelera.titulo}
          image={cartelera.imagen}
          onVerDetalle={() => verDetalle(cartelera)}
        />
      ))}
    </main>
  )
}

export default Cartelera