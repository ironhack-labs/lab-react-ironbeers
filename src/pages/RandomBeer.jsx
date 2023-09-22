import React , {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(()=>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((res) => {
      setRandomBeer(res.data)

    })
    .catch((err)=> {
      console.log(err)

    })
  },[])

  return (
    <div>
      <NavBar></NavBar>
      
      <h2>Random Beer</h2>
      {randomBeer && (
        <div>
            <img src={randomBeer.image_url} alt="" />
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
      )}

    </div>
  )
}

export default RandomBeer