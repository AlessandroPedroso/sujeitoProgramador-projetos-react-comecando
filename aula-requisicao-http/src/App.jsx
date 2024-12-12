import { useEffect, useState } from "react";
import './style.css';
// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
        .then((result) => result.json())
        .then((json) => {
          setNutri(json)
      })
    }

    loadApi();
  },[])

  return (
    <div className="container">

      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => (
        <article key={item.id} className="posts">
          <strong className="titulo">{item.titulo}</strong>
          <img src={item.capa} alt={item.tile} className="capa" />
          <p className="subtitulo">
            {item.subtitulo}
          </p>
          <h1>Categoria: { item.categoria }</h1>
          <a className="botao">Acessar</a>
        </article>
      ))}
    </div>
  )
}

export default App
