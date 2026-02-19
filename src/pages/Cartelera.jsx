import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {  
  return (
    <main className="container"
    
    >
      <MovieCard
        title="Bob Esponja: Al Rescate"
        image="https://th.bing.com/th/id/R.8ee0d801c6774ee57d357615eb72febd?rik=Z6m68FTFlSqDtg&pid=ImgRaw&r=0g"
        onVerDetalle={() => cambiarVista("detalle")}
      />   
      <MovieCard
        title="La Cabra Que Cambio El Juego Goat"
        image="https://mx.web.img3.acsta.net/img/2d/2d/2d2dcb89430c504ea265a4736cd0a27e.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />   
      <MovieCard
        title="Quieres ser mi novia "
        image="https://tse4.mm.bing.net/th/id/OIP.EykrJfQaMMMzIgBZhK6ORgHaKl?rs=1&pid=ImgDetMain&o=7&rm=3"
        onVerDetalle={() => cambiarVista("detalle")}
      />  
      <MovieCard
        title="Camino Del Crimen"
        image="https://agendadecine.ar/?seraph_accel_gi=wp-content%2Fuploads%2F2025%2F10%2FUIP-CAMINOS-DEL-CRIMEN.png&n=hbTXzRVPaJHaJ80b7hjbA"
        onVerDetalle={() => cambiarVista("detalle")}
      />  
      <MovieCard
        title="La empleada"
        image="https://tse3.mm.bing.net/th/id/OIP.7C-tSg4rMHgeVfx2ekSe9wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
        onVerDetalle={() => cambiarVista("detalle")}
      />  
    </main>
  )
}

// Exportamos la vista   "Exportamos": Unknown word.
export default Cartelera   
