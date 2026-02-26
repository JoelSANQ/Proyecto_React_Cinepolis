
function Header({ cambiarVista }) {  
  return (
    <header
  style={{
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#253faf"
  }}
>
      {/* Contenedor interno para ordenar contenido */}   
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          maxWidth: "1400px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "16px"
        }}
      >
        <h1 style={{ margin: 0 }}>Cinepolis</h1>   
        <nav
  style={{
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "flex-end"
  }}
>
  <span
    style={{ cursor: "pointer" }}
    onClick={() => cambiarVista("home")}
  >
    Inicio
  </span>

  <span
    style={{ cursor: "pointer" }}
    onClick={() => cambiarVista("cartelera")}
  >
    Cartelera
  </span>

  <span
    style={{ cursor: "pointer" }}
    onClick={() => cambiarVista("comida")}
  >
    Alimentos
  </span>
  <span
    style={{ cursor: "pointer" }}
    onClick={() => cambiarVista("membresia")}
  >
    Membresía
  </span>
</nav>
</div>
</header>
)
}

export default Header