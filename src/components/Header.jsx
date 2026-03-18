import { Link, NavLink } from 'react-router-dom';

function Header() {
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
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 style={{ margin: 0 }}>Cinepolis</h1>
        </Link>
        <nav
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/cartelera"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Cartelera
          </NavLink>

          <NavLink
            to="/comida"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Alimentos
          </NavLink>
          <NavLink
            to="/membresia"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Membresía
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header