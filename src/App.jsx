import React, { useState } from 'react';
import './App.css'
import './pages/Home.css'


// Componentes 
import Header from "./components/Header"
// Importamos el nuevo componente (Asegúrate de haberlo creado como CarritoGlobal.jsx)
import { CarritoGlobal } from "./components/Carrito"

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
  // Estado que controla qué vista se muestra 
  const [vistaActual, setVistaActual] = useState("home")
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
  
  // Estado para el carrito acumulativo (pop-up)
  const [carrito, setCarrito] = useState([])

  // Función para agregar productos al carrito desde cualquier vista
  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto])
  }

    // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  return (
    // Contenedor raíz de la aplicación 
    <div style={{ minHeight: "100vh" }}>
      {/* Header puede cambiar la vista */}   
      <Header cambiarVista={setVistaActual} />   

      {/* Renderizado condicional de vistas */}   
      
      {vistaActual === "comida" && <Comida cambiarVista={setVistaActual} />} 
      {vistaActual === "membresia" && <Membresia cambiarVista={setVistaActual} />} 
      
      {/* Pasamos la función agregarAlCarrito a las vistas de productos */}
      {vistaActual === "palomitas" && <Palomitas cambiarVista={setVistaActual} onAgregar={agregarAlCarrito} />}
      {vistaActual === "refrescos" && <Refrescos cambiarVista={setVistaActual} onAgregar={agregarAlCarrito} />}
      {vistaActual === "combos" && <Combos cambiarVista={setVistaActual} onAgregar={agregarAlCarrito} />}
      {vistaActual === "dulces" && <Dulces cambiarVista={setVistaActual} onAgregar={agregarAlCarrito} />}
      
      {/* Renderizado condicional */}
      {vistaActual === "home" && ( <Home verDetalle={verDetalle} /> )}
      {vistaActual === "cartelera" && (<Cartelera verDetalle={verDetalle} />)}
      {vistaActual === "detalle" && (  <Detalle pelicula={peliculaSeleccionada} />)}

      {/* COMPONENTE CARRITO GLOBAL (POP-UP) */}
      {/* Se mantiene accesible en todas las vistas si hay productos */}
      <CarritoGlobal 
        listaProductos={carrito} 
        setListaProductos={setCarrito} 
      />
    </div>
  )
}

// Exportamos App
export default App