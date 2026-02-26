import { useState } from 'react'
import './App.css'
import './pages/Home.css'


// Componentes   "Componentes": Misspelled word.
import Header from "./components/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"   
import Detalle from "./pages/Detalle"    
import Comida from "./pages/Food"   
import Membresia from "./pages/membresia"
import Palomitas from "./pages/Detalle_Palomitas"
import Refrescos from "./pages/Detalle_Refrescos"
import Combos from "./pages/Detalle_Combos" 
import Dulces from "./pages/Detalle_Dulces"

function App() {
  // Estado que controla qué vista se muestra   "Estado": Unknown word.
  const [vistaActual, setVistaActual] = useState("home")
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

    // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  return (
    // Contenedor raíz de la aplicación   "Contenedor": Unknown word.
    <div style={{ minHeight: "100vh" }}>
      {/* Header puede cambiar la vista */}   
      <Header cambiarVista={setVistaActual} />   

      {/* Renderizado condicional de vistas */}   
      
 

      {vistaActual === "comida" && <Comida cambiarVista={setVistaActual} />} 
      {vistaActual === "membresia" && <Membresia cambiarVista={setVistaActual} />} 
      {vistaActual === "palomitas" && <Palomitas cambiarVista={setVistaActual} />}
      {vistaActual === "refrescos" && <Refrescos cambiarVista={setVistaActual} />}
      {vistaActual === "combos" && <Combos cambiarVista={setVistaActual} />}
      {vistaActual === "dulces" && <Dulces cambiarVista={setVistaActual} />}
          {/* Renderizado condicional, el triple "=" es para asegurar que solo se cumpla la condición si es exactamente igual */}
      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}
    </div>
  )
}

// Exportamos App   "Exportamos": Unknown word.
export default App



