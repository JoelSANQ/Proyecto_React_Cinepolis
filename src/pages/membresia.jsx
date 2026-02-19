import MovieCard from "../components/MovieCard"
import "./membresia.css"

import fan from "../assets/cinepolis fan.jpg"
import fanatico from "../assets/fanatico.jpg"
import superfan from "../assets/super fanatico.jpg"

function Membresia({ cambiarVista }) {  
  return (
    <main className="container_dulces"
    >
      <MovieCard
        title="Nivel Fan"
        image={fan}
        onVerDetalle={() => cambiarVista("detalle")}
      />   
      <MovieCard
        title="Nivel Fanatico"
        image={fanatico}
        onVerDetalle={() => cambiarVista("detalle")}
      />   
      <MovieCard
        title="Nivel Super Fanatico"
        image={superfan}
        onVerDetalle={() => cambiarVista("detalle")}
      />   
    </main>
  )
}

// Exportamos la vista   "Exportamos": Unknown word.
export default Membresia