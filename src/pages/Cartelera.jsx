import MovieCard from "../components/MovieCard"

function Cartelera({ onVerDetalle }) {

  const peliculas = [
    { id: 201, titulo: "Bob Esponja: Al Rescate", imagen: "https://th.bing.com/th/id/R.8ee0d801c6774ee57d357615eb72febd?rik=Z6m68FTFlSqDtg&pid=ImgRaw&r=0g" },
    { id: 202, titulo: "La Cabra Que Cambio El Juego Goat", imagen: "https://mx.web.img3.acsta.net/img/2d/2d/2d2dcb89430c504ea265a4736cd0a27e.jpg" },
    { id: 203, titulo: "Quieres ser mi novia", imagen: "https://tse4.mm.bing.net/th/id/OIP.EykrJfQaMMMzIgBZhK6ORgHaKl?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 204, titulo: "Camino Del Crimen", imagen: "https://agendadecine.ar/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F10%2FUIP-CAMINOS-DEL-CRIMEN.png&n=hbTXzRVPaJHaJ80b7hjbA" },
    { id: 205, titulo: "La empleada", imagen: "https://tse3.mm.bing.net/th/id/OIP.7C-tSg4rMHgeVfx2ekSe9wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" }
  ]

  return (
    <main className="container">
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          onVerDetalle={() => onVerDetalle(pelicula)}
        />
      ))}
    </main>
  )
}

export default Cartelera