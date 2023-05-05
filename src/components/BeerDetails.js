import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function BeerDetails(props){
  const isRandom = props.random

  const beerId = useParams().id
  const [beer, setBeer] = useState([])
  
  useEffect(() => {
    if(isRandom){
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
          setBeer(response.data)
      })
    }
    else{
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
          setBeer(response.data.find(beer => beer._id === beerId))
      })
    }
  }, [beerId])

  return(
    <div>
      <img height={100} src={beer.image_url}/>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
  )
}
export default BeerDetails