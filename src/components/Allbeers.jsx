import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Homebutton from './Homebutton'


function Allbeers() {
  const [beers, setBeers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Homebutton />
      <h3>List of all ours beers</h3>
      {isLoading && <h1>...Loading</h1>}
      {beers.map((oneBeer) => {
        return (

          <div key={oneBeer._id} className="card">
            <div className='bottle'>
              <img src={oneBeer.image_url} alt="beer" width={60} />
            </div>
            <div className='beer-details'>
              <h1>{oneBeer.name}</h1>
              <h5 className='color-detail'>{oneBeer.tagline}</h5>
              <h5>{oneBeer.contributed_by}</h5>  
              <Link to={oneBeer._id}>
              <button>See Details</button>
            </Link>
            </div>
          
          </div>
        )
      })

      }
    </div>
  )
}

export default Allbeers