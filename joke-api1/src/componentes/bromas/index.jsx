import { useEffect, useState } from 'react'
import './style.css'

function Bromas() {
  const [chiste, setChiste] = useState(null)

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then(res => res.json())
      .then(data => {
        if (data.type === "single") {
          setChiste(data.joke)
        } else {
          setChiste(`${data.setup} ... ${data.delivery}`)
        }
      })
  }, [])

  return (
    <div className="c-broma">
      <h2>Chiste del momento</h2>
      <p>{chiste || "Cargando chiste..."}</p>
    </div>
  )
}

export default Bromas
