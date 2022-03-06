import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './AllBeer.css'

function AllBeer() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
      
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {

        console.log(response.data)
        setBeers(response.data)
  
      })
      .catch((err) => console.log(err))
    
    }, [])

  return (

    <div className="container">

    {beers && beers.map((beer) => 

      <div className="box">
        <img className="beer-img"src={beer.image_url}/>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <Link to={`/beer-details/${beer._id}`}><p className="btn">More Details</p></Link>
      </div>
        
    )

  }
    </div>
  )

}

export default AllBeer