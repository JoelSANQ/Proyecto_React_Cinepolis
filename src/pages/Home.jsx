import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"

// Swiper CSS
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import MovieCard from "../components/MovieCard"
import peliculas from "../assets/data/detalles.json"
import "./Home.css"

function Home({ verDetalle }) {
  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <section className="hero-carousel-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          slidesPerView={1}
          spaceBetween={0}
        >
          {peliculas.map((pelicula) => (
            <SwiperSlide key={pelicula.id}>
              <div className="hero-slide">
                {/* Fondo difuminado */}
                <div className="hero-slide-bg">
                  <img src={pelicula.imagen} alt="" />
                </div>

                {/* Contenido del slide */}
                <div className="hero-slide-content">
                  {/* Info de la película */}
                  <div className="hero-slide-info">
                    <span className="hero-slide-badge">
                      🎬 En cartelera
                    </span>
                    <h2 className="hero-slide-title">
                      {pelicula.titulo}
                    </h2>
                    <p className="hero-slide-desc">
                      {pelicula.descripcion}
                    </p>
                    <button
                      className="hero-slide-btn"
                      onClick={() => verDetalle(pelicula)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                      </svg>
                      Comprar boletos
                    </button>
                  </div>

                  {/* Poster de la película */}
                  <div className="hero-slide-poster">
                    <img
                      src={pelicula.imagen}
                      alt={pelicula.titulo}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== GRID DE PELÍCULAS ===== */}
      <section className="movies-grid-section">
        <h2>Películas disponibles</h2>
        <main className="container">
          {peliculas.map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.titulo}
              image={pelicula.imagen}
              onVerDetalle={() => verDetalle(pelicula)}
            />
          ))}
        </main>
      </section>
    </>
  )
}

export default Home
