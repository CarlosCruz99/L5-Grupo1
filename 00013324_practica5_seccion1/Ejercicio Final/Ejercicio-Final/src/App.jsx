function App() {
  let imagenes = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/800px-Marie_Curie_c._1920s.jpg',
    'https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg',
  ]

  return (
    <>
      <h1>Científicos Notables</h1>
      <div id="contenedores">
          <div className="contenedor">
              <h2>Maria Sklodowska-Curie</h2>
              <img src={imagenes[0]}/>
              <ul>
                  <li><span>Profesión:</span> física y química</li>
                  <li><span>Premios: 4</span> (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)</li>
                  <li><span>Descubrió:</span> polonio (elemento químico)</li>
              </ul>
          </div>
          <div className="contenedor">
              <h2>Katsuko Saruhashi</h2>
              <img src={imagenes[1]}/>
              <ul>
                  <li><span>Profesión:</span> geoquímica</li>
                  <li><span>Premios: 2</span> (Premio Miyake de geoquímica, Premio Tanaka)</li>
                  <li><span>Descubrió:</span> un método para medir el dióxido de carbono en el agua de mar</li>
              </ul>
          </div>
      </div>
    </>
  )
}

export default App
