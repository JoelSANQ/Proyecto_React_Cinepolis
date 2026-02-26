import MovieCard from "../components/MovieCard"
import peliculas from "../assets/data/detalles.json";
import "./Home.css"

function Home({ verDetalle }) {
  
  return (
    <main className="container"
    >
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  );
}
export default Home
