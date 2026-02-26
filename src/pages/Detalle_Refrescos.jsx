// Vista de detalle de una película   "detalle": Unknown word.
import FoodCard from "../components/FoodCard"

// 1. Recibimos la función onAgregar para que el click llegue al carrito global
function Refrescos({ onAgregar }) {   
  return (
    <main className="container">

     <FoodCard
        title="Coca-Cola"
        image="https://www.coca-cola.com/content/dam/onexp/mx/es/history/global_history_rich_history_campaign_card_1280x1024.jpg"
        // 2. Enviamos el precio de la Coca ($85)
        onAgregar={() => onAgregar({ 
          title: "Coca-Cola", 
          image: "https://www.coca-cola.com/content/dam/onexp/mx/es/history/global_history_rich_history_campaign_card_1280x1024.jpg",
          price: 85 
        })}
      />   

        <FoodCard
        title="ARIZONA"
        image="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00061300876525L.jpg"
        // 2. Enviamos el precio del Arizona ($70)
        onAgregar={() => onAgregar({ 
          title: "ARIZONA", 
          image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00061300876525L.jpg",
          price: 70 
        })}
      />   
     
    </main>
  )
}

export default Refrescos