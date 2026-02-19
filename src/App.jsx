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

  return (
    // Contenedor raíz de la aplicación   "Contenedor": Unknown word.
    <div style={{ minHeight: "100vh" }}>
      {/* Header puede cambiar la vista */}   
      <Header cambiarVista={setVistaActual} />   

      {/* Renderizado condicional de vistas */}   
      {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}   
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}  
      {vistaActual === "detalle" && <Detalle />}   
      {vistaActual === "comida" && <Comida cambiarVista={setVistaActual} />} 
      {vistaActual === "membresia" && <Membresia cambiarVista={setVistaActual} />} 
      {vistaActual === "palomitas" && <Palomitas cambiarVista={setVistaActual} />}
      {vistaActual === "refrescos" && <Refrescos cambiarVista={setVistaActual} />}
      {vistaActual === "combos" && <Combos cambiarVista={setVistaActual} />}
      {vistaActual === "dulces" && <Dulces cambiarVista={setVistaActual} />}
    </div>
  )
}

// Exportamos App   "Exportamos": Unknown word.
export default App



