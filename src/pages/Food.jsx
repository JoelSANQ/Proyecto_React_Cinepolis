import MovieCard from "../components/MovieCard"

function Comida({ cambiarVista }) {  
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Combos"
        image="https://blob.tusbuenasnoticias.com/images/2024/03/21/precio-de-los-combos-en-cinepolis-en-2024-y-que-incluyen-focus-0-0-1292-860.jpg"
        onVerDetalle={() => cambiarVista("combos")}
      />   
      <MovieCard
        title="Palomitas"
        image="https://tse3.mm.bing.net/th/id/OIP.vRN2OarFa_cJjyracsxgagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        onVerDetalle={() => cambiarVista("palomitas")}
      />   
      <MovieCard
        title="Refrescos"
        image="https://cdn-3.expansion.mx/dims4/default/6babeb5/2147483647/strip/true/crop/727x452+0+0/resize/1200x746!/quality/90/?url=https:%2F%2Fcdn-3.expansion.mx%2Fc5%2Fc1%2Fdb21fc8d48e586707ace989b9372%2Fcaptura-de-pantalla-2018-02-13-a-la-s-13.06.13.png"
        onVerDetalle={() => cambiarVista("refrescos")}
      />   
       <MovieCard
        title="Dulces"
        image="https://www.larutadelagarnacha.mx/wp-content/uploads/2020/12/portada-mexico.jpg"
        onVerDetalle={() => cambiarVista("dulces")}
      />   
    </main>
  )
}

// Exportamos la vista   "Exportamos": Unknown word.
export default Comida  
