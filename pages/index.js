import { useEffect } from "react";
import styles  from './index.module.css';

function Home() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add(styles.heart); // Adiciona a classe do CSS

      // Adiciona o coração ao body
      document.body.appendChild(heart);

      // Define a posição e o tamanho
      const randomX = Math.random() * window.innerWidth;
      heart.style.left = `${randomX}px`;

      const size = Math.random() * 20 + 10; // Tamanho entre 10px e 30px
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;

      heart.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;

      // Remove o coração após 5 segundos
      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    // Cria corações repetidamente
    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);



   return <div className="container">
    <div className="card">
      <h1>"Raquel tudo aquilo que eu pretendo ser, 
      devo a um anjo, minha mãe ❤ "</h1>
    </div>
      <style jsx>{`
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          overflow: hidden; /* Para ocultar os corações fora da tela */
          font-family: 'Arial', sans-serif;
        }
        .card {
          background-color: #ffffff;
          box-shadow: 6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          width: 90%;
          max-width: 400px;
          z-index: 1;
        }
        
        .card h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }

    @media (min-width: 768px) {
      .card {
        width: 60%;
        max-width: 500px;
      }

      .card h1 {
        font-size: 2rem;
      }
      
          .heart {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: red;
      transform: rotate(45deg);
      animation: float 5s linear infinite;
      opacity: 0.8;
    }

    .heart::before,
    .heart::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: red;
      border-radius: 50%;
    }

    .heart::before {
      top: -10px;
      left: 0;
    }

    .heart::after {
      left: -10px;
      top: 0;
    }

    @keyframes float {
      0% {
        transform: translateY(0) rotate(45deg);
        opacity: 0.8;
      }
      100% {
        transform: translateY(-100vh) rotate(45deg);
        opacity: 0;
      }
    }
         
        
    `}</style>
    </div>
}
export default Home;