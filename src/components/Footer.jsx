

import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-section">
                        <h3>Cinépolis</h3>
                        <p>
                            Vive la mejor experiencia de cine con estrenos, promociones y
                            beneficios exclusivos cada vez que visitas el cine.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Navegación</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Cartelera</a></li>
                            <li><a href="#">Alimentos</a></li>
                            <li><a href="#">Membresía</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Ayuda</h3>
                        <ul>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Soporte</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Email: soporte@cinepolis.com</p>
                        <p>Tel: +52 999 123 4567</p>

                        <div className="socials">
                            <a href="#">🌐</a>
                            <a href="#">📷</a>
                            <a href="#">🐦</a>
                            <a href="#">▶</a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    © 2026 Cinépolis - Proyecto académico
                </div>
            </footer>

            <style>{`
        .footer{
          background: linear-gradient(180deg,#0f172a,#020617);
          color: white;
          padding-top: 40px;
          margin-top: 60px;
        }

        .footer-container{
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
          gap: 30px;
          padding: 20px;
        }

        .footer-section h3{
          margin-bottom: 15px;
          color: #60a5fa;
        }

        .footer-section p{
          font-size: 14px;
          line-height: 1.6;
          color: #cbd5f5;
        }

        .footer-section ul{
          list-style: none;
          padding: 0;
        }

        .footer-section ul li{
          margin: 8px 0;
        }

        .footer-section ul li a{
          text-decoration: none;
          color: #cbd5f5;
          transition: 0.3s;
        }

        .footer-section ul li a:hover{
          color: #f59e0b;
        }

        .socials{
          margin-top: 10px;
        }

        .socials a{
          font-size: 20px;
          margin-right: 10px;
          text-decoration: none;
          transition: 0.3s;
        }

        .socials a:hover{
          transform: scale(1.2);
        }

        .footer-bottom{
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 30px;
          padding: 15px;
          font-size: 14px;
          color: #94a3b8;
        }
      `}</style>
        </>
    );
}

export default Footer;