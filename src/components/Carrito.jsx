import React, { useState } from 'react';

export function CarritoGlobal({ listaProductos, setListaProductos }) {
  const [paso, setPaso] = useState(0); // 0: Cerrado, 1: Resumen, 2: Pago, 3: Éxito
  const [nombre, setNombre] = useState('');
  const [tipoTarjeta, setTipoTarjeta] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');

  // Función para eliminar un producto específico por su posición en el arreglo
  const eliminarProducto = (indexAEliminar) => {
    const nuevaLista = listaProductos.filter((_, index) => index !== indexAEliminar);
    setListaProductos(nuevaLista);
    
    // Si borras el último producto, cerramos el modal
    if (nuevaLista.length === 0) {
      setPaso(0);
    }
  };

  if (listaProductos.length === 0 && paso === 0) return null;

  const total = listaProductos.reduce((acc, prod) => acc + (prod.price || 0), 0);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      {paso === 0 && (
        <div 
          onClick={() => setPaso(1)}
          style={{ 
            position: 'fixed', bottom: '20px', right: '20px', 
            backgroundColor: '#ff9800', color: 'white', 
            padding: '15px 25px', borderRadius: '50px', 
            cursor: 'pointer', fontWeight: 'bold', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)', zIndex: 2000 
          }}
        >
          🛒 Ver Carrito ({listaProductos.length})
        </div>
      )}

      {/* MODAL DEL CARRITO */}
      {paso > 0 && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000 }}>
          <div style={{ background: '#1c1c1c', color: 'white', padding: '30px', borderRadius: '15px', width: '380px', border: '1px solid #333', textAlign: 'center' }}>
            
            {/* PASO 1: RESUMEN CON OPCIÓN DE ELIMINAR */}
            {paso === 1 && (
              <div>
                <h2 style={{ color: "#ff9800" }}>Tu Pedido</h2>
                <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px' }}>
                  {listaProductos.map((prod, index) => (
                    <div key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between", // Para mandar la X al final
                      background: "#2a2a2a", 
                      padding: "8px", 
                      borderRadius: "8px", 
                      marginBottom: "5px" 
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={prod.image} alt={prod.title} style={{ width: "40px", height: "40px", borderRadius: "4px", objectFit: "cover" }} />
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>{prod.title}</p>
                      </div>
                      
                      {/* LA EQUIS (X) PARA ELIMINAR */}
                      <button 
                        onClick={() => eliminarProducto(index)}
                        style={{ 
                          background: "none", 
                          color: "#ff4444", 
                          border: "none", 
                          fontSize: "1.2rem", 
                          cursor: "pointer", 
                          fontWeight: "bold",
                          padding: "0 5px"
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <h3 style={{ borderTop: "1px solid #444", paddingTop: "10px" }}>Total: ${total}</h3>
                <button onClick={() => setPaso(2)} style={{ width: '100%', padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', marginBottom: '10px', cursor: 'pointer' }}>Ir a pagar</button>
                <button onClick={() => setPaso(0)} style={{ width: '100%', padding: '10px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Seguir comprando</button>
              </div>
            )}

            {/* PASO 2: FORMULARIO */}
            {paso === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setPaso(3); }}>
                <h3 style={{ color: "#ff9800" }}>Finalizar Pago</h3>
                <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: 'none', background: '#333', color: 'white' }} />
                <select value={tipoTarjeta} onChange={(e) => setTipoTarjeta(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px', background: '#333', color: 'white', border: 'none' }}>
                  <option value="">Tipo de tarjeta</option>
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                </select>
                <input type="number" placeholder="Número de tarjeta" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: 'none', background: '#333', color: 'white' }} />
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Confirmar y Pagar ${total}</button>
                <button type="button" onClick={() => setPaso(1)} style={{ background: 'none', color: '#888', border: 'none', marginTop: '10px', cursor: 'pointer' }}>Regresar al resumen</button>
              </form>
            )}

            {/* PASO 3: ÉXITO */}
            {paso === 3 && (
              <div style={{ padding: "20px" }}>
                <div style={{ fontSize: "4rem" }}>✅</div>
                <h2>¡Pago Exitoso!</h2>
                <p>Se han procesado {listaProductos.length} productos.</p>
                <button onClick={() => {setPaso(0); setListaProductos([]);}} style={{ marginTop: '20px', width: '100%', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Finalizar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}