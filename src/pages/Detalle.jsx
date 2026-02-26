import { useState, useEffect } from "react"
import Button from "../components/Button"

function Detalle({ pelicula }) {
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  const [favoritos, setFavoritos] = useState([])
  const [esFavorito, setEsFavorito] = useState(false)

  // Comentarios
  const [comentario, setComentario] = useState("")
  const [listaComentarios, setListaComentarios] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false)

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || []
    setFavoritos(guardados)
    if (pelicula) {
      setEsFavorito(guardados.some(f => f.titulo === pelicula.titulo))
    }
  }, [pelicula])

  // Lógica de Favoritos (Toggle y Eliminar)
  function agregarFavoritos() {
    let nuevos = [...favoritos]
    const indice = nuevos.findIndex(f => f.titulo === pelicula.titulo)
    
    if (indice === -1) {
      nuevos.push(pelicula)
      setEsFavorito(true)
    } else {
      nuevos.splice(indice, 1)
      setEsFavorito(false)
    }
    
    actualizarFavoritos(nuevos)
  }

  function eliminarFavoritoDeLista(titulo) {
    const nuevos = favoritos.filter(f => f.titulo !== titulo)
    if (pelicula && titulo === pelicula.titulo) setEsFavorito(false)
    actualizarFavoritos(nuevos)
  }

  function actualizarFavoritos(lista) {
    localStorage.setItem("favoritos", JSON.stringify(lista))
    setFavoritos(lista)
  }

  // Comentarios
  function agregarComentario() {
    if (!comentario.trim()) return
    setListaComentarios([...listaComentarios, comentario])
    setComentario("")
    setMostrarModal(false)
  }

  function eliminarComentario(index) {
    setListaComentarios(listaComentarios.filter((_, i) => i !== index))
  }

  if (!pelicula) return <h2 style={{ color: "white", textAlign: "center" }}>No hay película seleccionada</h2>

  function manejarCompra(e) {
    e.preventDefault()
    setMensaje(`Gracias ${nombre}, compraste ${cantidadBoletos} boletos.`)
    setNombre(""); setCantidadBoletos(1)
  }

  return (
    <main style={{ padding: "24px", maxWidth: "800px", margin: "0 auto", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      {/* Contenedor Imagen */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>{pelicula.titulo}</h2>
        <img src={pelicula.imagen} alt={pelicula.titulo} style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} />
        <p style={{ marginTop: "15px", color: "#bbb" }}>{pelicula.descripcion}</p>
      </div>

      {/* Botones de Acción */}
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginBottom: "40px" }}>
        <Button 
          text={esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"} 
          onClick={agregarFavoritos} 
        />
        <Button text="Escribir Comentario" onClick={() => setMostrarModal(true)} />
      </div>

      {/* Formulario Compra */}
      <section style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px", marginBottom: "30px", border: "1px solid #333" }}>
        <h3 style={{ borderBottom: "2px solid #ff9800", paddingBottom: "10px", marginTop: 0 }}>Comprar boletos</h3>
        <form onSubmit={manejarCompra} style={{ marginTop: "15px" }}>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ display: "block", width: "100%", padding: "10px", margin: "8px 0", background: "#333", border: "1px solid #444", color: "white", borderRadius: "5px" }} required />
          <label>Boletos:</label>
          <input type="number" min="1" value={cantidadBoletos} onChange={(e) => setCantidadBoletos(e.target.value)} style={{ display: "block", width: "100%", padding: "10px", margin: "8px 0", background: "#333", border: "1px solid #444", color: "white", borderRadius: "5px" }} required />
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#ff9800", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Comprar</button>
        </form>
        {mensaje && <p style={{ color: "#4caf50", marginTop: "10px" }}>{mensaje}</p>}
      </section>

      {/* Sección Reseñas */}
      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ marginBottom: "15px" }}>Reseñas de usuarios</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {listaComentarios.length === 0 ? <p style={{ color: "#666", fontStyle: "italic" }}>Aún no hay reseñas...</p> : 
            listaComentarios.map((c, i) => (
              <div key={i} style={{ background: "#222", padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: "4px solid #ff9800", boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }}>
                <span>{c}</span>
                <button onClick={() => eliminarComentario(i)} style={{ background: "transparent", color: "#ff4444", border: "none", cursor: "pointer", fontSize: "1.2rem", marginLeft: "10px" }}>✕</button>
              </div>
            ))
          }
        </div>
      </section>

      {/* ===== SECCIÓN FAVORITOS CON NUEVO ESTILO ===== */}
      <section>
        <h3 style={{ marginBottom: "15px" }}>Mi Lista de Favoritos</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {favoritos.length === 0 ? <p style={{ color: "#666", fontStyle: "italic" }}>Tu lista está vacía.</p> : 
            favoritos.map((fav, i) => (
              <div key={i} style={{ background: "#222", padding: "12px 15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: "4px solid #ff9800", boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                   <span style={{ fontWeight: "bold" }}>{fav.titulo}</span>
                </div>
                <button onClick={() => eliminarFavoritoDeLista(fav.titulo)} style={{ background: "transparent", color: "#ff4444", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>✕</button>
              </div>
            ))
          }
        </div>
      </section>

      {/* Modal de Comentarios */}
      {mostrarModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "15px", width: "90%", maxWidth: "400px", border: "1px solid #ff9800", boxShadow: "0 0 20px rgba(255, 152, 0, 0.2)" }}>
            <h3 style={{ marginBottom: "15px", marginTop: 0 }}>Deja tu opinión</h3>
            <textarea 
              value={comentario} 
              onChange={(e) => setComentario(e.target.value)}
              placeholder="¿Qué te pareció la película?"
              style={{ width: "100%", height: "100px", padding: "10px", borderRadius: "5px", background: "#333", color: "white", border: "1px solid #444", marginBottom: "15px", outline: "none", resize: "none" }}
            />
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button onClick={() => setMostrarModal(false)} style={{ background: "#444", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}>Cancelar</button>
              <Button text="Publicar" onClick={agregarComentario} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Detalle