import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'

function RandomBeer() {

    const [beer, setBeer] = useState(null)
  

    const getBeers = async() =>{
        try {
          let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)  

            setBeer(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBeers()
        }, [])
    





  return (
    <div>
      <Header />


{ beer && (
  <>
  <img src={beer.image_url}/>
  <h1>{beer.name}</h1>
  <p>{beer.tagline}</p>
  <p>{beer.first_brewed}</p>
  <p>{beer.attenuation_level}</p>
  <p>{beer.description}</p>
  <p>{beer.contributed_by}</p>
  </>  

      )}
  </div>
)
}

export default RandomBeer