import React from 'react';

function FoodCard({ title, image, onAgregar }) {
  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <div style={{
        border: "1px solid #444",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#1c1c1c",
        textAlign: "center",
        color: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
      }}>
        <img src={image} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
        <div style={{ padding: "15px" }}>
          <h4 style={{ fontSize: "1rem", margin: "10px 0", fontWeight: "bold" }}>{title}</h4>
          <button 
            onClick={() => onAgregar({ title, image })}
            style={{ backgroundColor: "#ff9800", color: "white", border: "none", padding: "8px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
          >
            Agregar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;