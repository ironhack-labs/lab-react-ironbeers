import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export const Beers = () => {
  const [beers, setBeers] = useState([]);

  const getAllBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/')
      .then((res) => setBeers(res.data))
  }

  useEffect(() => {
    getAllBeers();
  }, [])


  return (
    <div className="container">
      {/* {console.log(beers)} */}
      <div className="d-flex flex-wrap">
        {beers.map(beer => {
          return (

            
              <div className="card m-2" key={beer._id} style={{ width: '9rem' }}>
                <img className="card-img-top p-4" style={{'max-height':'18rem'}} src={beer.image_url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{beer.name}</h5>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}
