import MovieCard from "../components/MovieCard"
import "./Home.css"

function Home({ cambiarVista }) {
  return (
    <main className="container">
      <MovieCard
        title="Marty supreme"
        image="https://static0.srcdn.com/wordpress/wp-content/uploads/2025/11/imgi_1_f71399ef-4cbe-8b33-b55b-0761ec1bbaa0.jpeg?q=49&fit=contain&w=480&dpr=2"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="¡Ayuda!"
        image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Exterminio: Templo de huesos"
        image="https://tse3.mm.bing.net/th/id/OIP.9yFmZCyiSX1mOHzxMyizoQHaKk?rs=1&pid=ImgDetMain&o=7&rm=3"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Hamnet"
        image="https://image.tmdb.org/t/p/original/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Arco"
        image="https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

export default Home
