import React from 'react'
import Header from '../components/Header'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ListBeers() {

  const [beers, setBeers] = useState([])

  const handleBeers = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      setBeers(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleBeers()
  })

  return (
    <div>
      <Header/>

      
      {beers && (
        beers.map((beer)=>{
          return (
            <div>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="beerimg"/>
                <div>
                  <h1>{beer.name}</h1>
                  <h2>{beer.tagline}</h2>
                  <p>Created by: {beer.name}</p>
                </div>
                </Link>
            </div>
          )
        })
      )}
    </div>
  )
}

export default ListBeers