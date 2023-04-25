import HeaderLink from "../components/headerLink"
import { useState, useEffect } from "react"
import axios from "axios"

function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState({})
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((res) => {
      setRandomBeer(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
        <HeaderLink />
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer