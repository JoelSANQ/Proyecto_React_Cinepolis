// Vista de detalle de una película
import FoodCard from "../components/FoodCard"

function Combos({ onAgregar }) {   
  return (
    <main className="container">

      <FoodCard
        title="Combo cuates"
        image="https://blob.tusbuenasnoticias.com/images/2024/07/12/combo-cuates-en-cinepolis;-que-incluye-y-cuanto-cuesta-en-2024.jpg"
        // Ahora enviamos título, imagen Y precio real
        onAgregar={() => onAgregar({ 
          title: "Combo cuates", 
          image: "https://blob.tusbuenasnoticias.com/images/2024/07/12/combo-cuates-en-cinepolis;-que-incluye-y-cuanto-cuesta-en-2024.jpg",
          price: 285 
        })}
      />   

      <FoodCard
        title="Combo Pareja"
        image="https://blob.tusbuenasnoticias.com/images/2025/02/14/combos-para-pareja-en-cinepolis-y-costos-focus-0-0-825-612.webp"
        // Lo mismo para el Combo Pareja
        onAgregar={() => onAgregar({ 
          title: "Combo Pareja", 
          image: "https://blob.tusbuenasnoticias.com/images/2025/02/14/combos-para-pareja-en-cinepolis-y-costos-focus-0-0-825-612.webp",
          price: 340 
        })}
      />   
      
    </main>
  )
}

export default Combos