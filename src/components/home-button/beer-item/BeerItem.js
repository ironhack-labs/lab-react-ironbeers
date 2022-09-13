import React, {useState, useEffect} from 'react'
import HomeButton from '../HomeButton'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'


export default function BeerItem() {
  
  const { beerId } = useParams()
  const navigate = useNavigate()

  console.log('userId -->', beerId)

  const [beer, setBeers] = useState ([])

  useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => {
          const singleBeer = res.data.find(beer => beer._id === beerId)
          if(singleBeer) {
            setBeers(singleBeer)
          } else {
            navigate('/beers')
          }
          console.log(singleBeer)
      })
  }, [])

  return (
    <>
      <HomeButton />
      <div className='container m-2 text-center'>
        <img className='img-size  mb-3' src={beer.image_url} alt={beer.name} />
        <div className='d-flex justify-content-between'>
          <h2>{beer.name}</h2>
          <h2 className='text-secondary'>{beer.attenuation_level}</h2>
        </div>
        <div className='d-flex justify-content-between'>
          <h5 className='text-secondary'>{beer.tagline}</h5>
          <p><strong>{beer.first_brewed}</strong></p>
        </div>
        <p>{beer.description}</p>
        <p><strong>{beer.contributed_by}</strong></p>
      </div>
    </>
  )
}
