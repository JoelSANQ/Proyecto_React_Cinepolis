// Vista de detalle de una película   "detalle": Unknown word.
import FoodCard from "../components/FoodCard"

// 1. Recibimos la función onAgregar como prop
function Dulces({ onAgregar }) {   
  return (
    <main className="container">

     <FoodCard
        title="Snickers"
        image="https://www.webstaurantstore.com/images/products/extra_large/688749/2380448.jpg"
        // 2. Enviamos el objeto con el precio (ejemplo: $45)
        onAgregar={() => onAgregar({ 
            title: "Snickers", 
            image: "https://www.webstaurantstore.com/images/products/extra_large/688749/2380448.jpg",
            price: 45 
        })}
      />   

        <FoodCard
        title="Hersheys"
        image="https://m.media-amazon.com/images/I/91jvCL-U4-L._SL1500_.jpg"
        // 2. Hacemos lo mismo para el Hersheys (ejemplo: $40)
        onAgregar={() => onAgregar({ 
            title: "Hersheys", 
            image: "https://m.media-amazon.com/images/I/91jvCL-U4-L._SL1500_.jpg",
            price: 40 
        })}
      />   
     
    </main>
  )
}

export default Dulces