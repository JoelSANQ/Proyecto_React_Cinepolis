import { Link } from 'react-router-dom'
import MovieCard from "../components/MovieCard"
import { foodCategories } from "../data/foodData"

function Comida() {
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
      {foodCategories.map((category) => (
        <Link key={category.id} to={category.route} style={{ textDecoration: 'none' }}>
          <MovieCard
            title={category.title}
            image={category.image}
          />
        </Link>
      ))}
    </main>
  )
}

export default Comida
