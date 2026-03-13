import "./membresia.css"

import fan from "../assets/cinepolis fan.jpg"
import fanatico from "../assets/fanatico.jpg"
import superfan from "../assets/super fanatico.jpg"

const membresias = [
  {
    id: "fan",
    nivel: "Fan",
    icon: "⭐",
    imagen: fan,
    subtitulo: "Nivel básico de Club Cinépolis",
    popular: false,
    beneficios: [
      "Acumula el 5% en puntos sobre el total de tu compra",
      "Al afiliarte recibe un regalo de bienvenida en tu mail",
      "Acceso a promociones exclusivas para miembros",
      "Boletos a precio especial los miércoles",
      "Descuentos en dulcería seleccionada"
    ],
    precio: "Gratis",
    periodo: "Sin costo de afiliación",
    btnTexto: "Unirse gratis"
  },
  {
    id: "fanatico",
    nivel: "Fanático",
    icon: "🔥",
    imagen: fanatico,
    subtitulo: "Para los que viven el cine",
    popular: true,
    beneficios: [
      "Acumula el 10% en puntos sobre el total de tu compra",
      "Entradas a precio especial en 3D, Macro XE®, 4DX™, Cinépolis® Pluus y Sala Junior",
      "Descuentos en refill de palomitas grandes o jumbo",
      "Acceso anticipado a preventas de estrenos",
      "Combos exclusivos a precio preferencial",
      "2x1 en boletos el día de tu cumpleaños"
    ],
    precio: "$99",
    periodo: "por año",
    btnTexto: "Hacerse Fanático"
  },
  {
    id: "superfan",
    nivel: "Súper Fanático",
    icon: "💎",
    imagen: superfan,
    subtitulo: "La experiencia VIP definitiva",
    popular: false,
    beneficios: [
      "Acumula el 10% en puntos sobre el total de tu compra",
      "Entradas a Cinépolis VIP® a precio especial",
      "Descuentos en combos VIP exclusivos",
      "Acceso preferente en filas de taquilla y dulcería",
      "Invitaciones a premieres y eventos especiales",
      "Upgrade gratis a sala VIP (sujeto a disponibilidad)",
      "Regalo de cumpleaños premium"
    ],
    precio: "$199",
    periodo: "por año",
    btnTexto: "Ser Súper Fanático"
  }
]

function Membresia() {
  return (
    <div className="membresia-page">
      {/* Hero */}
      <section className="membresia-hero">
        <h1>Club <span>Cinépolis®</span></h1>
        <p>Elige tu nivel y disfruta de beneficios exclusivos cada vez que visitas el cine</p>
      </section>

      {/* Cards */}
      <section className="membresia-cards">
        {membresias.map((mem) => (
          <div
            key={mem.id}
            className={`membresia-card membresia-card--${mem.id === "superfan" ? "superfan" : mem.id}`}
          >
            {/* Popular badge */}
            {mem.popular && (
              <span className="membresia-popular">⭐ Más popular</span>
            )}

            {/* Header */}
            <div className="membresia-card-header">
              <div className="membresia-card-icon">{mem.icon}</div>
              <h2>{mem.nivel}</h2>
              <p className="membresia-subtitle">{mem.subtitulo}</p>
            </div>

            {/* Imagen de la tarjeta */}
            <div className="membresia-card-image">
              <img src={mem.imagen} alt={`Tarjeta ${mem.nivel}`} />
            </div>

            {/* Body */}
            <div className="membresia-card-body">
              {/* Lista de beneficios */}
              <ul className="membresia-benefits">
                {mem.beneficios.map((beneficio, idx) => (
                  <li key={idx}>
                    <span className="membresia-benefit-icon">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>

              {/* Precio */}
              <div className="membresia-price">
                <p className="membresia-price-label">Costo de membresía</p>
                <p className="membresia-price-amount">{mem.precio}</p>
                <p className="membresia-price-period">{mem.periodo}</p>
                <button className="membresia-btn">
                  {mem.btnTexto}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Info extra */}
      <section className="membresia-info">
        <div className="membresia-info-box">
          <h3>¿Cómo funciona Club Cinépolis?</h3>
          <p>
            Al registrarte recibirás tu tarjeta digital Club Cinépolis.
            Acumula puntos en cada compra de boletos y productos de dulcería.
            Tus puntos nunca expiran mientras tu membresía esté activa.
            Puedes subir de nivel en cualquier momento pagando la diferencia.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Membresia