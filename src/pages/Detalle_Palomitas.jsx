// Vista de detalle de una película   "detalle": Unknown word.
import FoodCard from "../components/FoodCard"

// 1. Recibimos la función onAgregar para poder mandarle los datos al App.js
function Palomitas({ onAgregar }) {   
  return (
    <main className="container">

     <FoodCard
        title="originales"
        image="https://www.gastrolabweb.com/u/fotografias/m/2021/2/19/f1280x720-8867_140542_5050.jpg"
        // 2. Vinculamos el click con el precio de $110
        onAgregar={() => onAgregar({ 
          title: "originales", 
          image: "https://www.gastrolabweb.com/u/fotografias/m/2021/2/19/f1280x720-8867_140542_5050.jpg",
          price: 110 
        })}
      />   

        <FoodCard
        title="acarameladas"
        image="https://tse1.mm.bing.net/th/id/OIP.UkLccp8m-Ywdnja7IkXZZQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
        // 2. Vinculamos el click con el precio de $120
        onAgregar={() => onAgregar({ 
          title: "acarameladas", 
          image: "https://tse1.mm.bing.net/th/id/OIP.UkLccp8m-Ywdnja7IkXZZQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
          price: 120 
        })}
      />   
     
    </main>
  )
}

export default Palomitas