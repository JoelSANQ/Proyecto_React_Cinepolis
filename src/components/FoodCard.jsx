


// Tarjeta de película reutilizable   "Tarjeta": Unknown word.
function FoodCard({ title, image, }) {  
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden", // Oculta lo que se salga del contenDedor   
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        minWidth: 0 
      }}
    >
      {/* Imagen de la película */}   
      <img
        src={image}
        alt={title}
        style={{
         width: "100%",
        aspectRatio: "2 / 3",   // poster
        objectFit: "cover",
        height: "300px",
        display: "block" // Mantiene proporción sin deformar   
            }}
        />

      {/* Contenido de la tarjeta */}   
      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3>{title}</h3>
      </div>
    </div>

    
  )
}

// Exportamos el componente   
export default FoodCard
