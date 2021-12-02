import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios/axiosinstance'

function AllBeers({ onfilter }) {
  const [beers, setBeers] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'get'
    }).then(data => {
      console.log(data.data[0])
      setBeers([...data.data])
      setError('');
      setLoading(false)
    })
      .catch(error => {
        console.log("Error on calling Api to get All beers : ", error)
        setError('Some thing happend on calling the API try refresh the page please!.look at console for more info')
        setLoading(false)
      });

  }, [])
  //Handlres :
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    //TODO ADD some Delay to prevent calling API on each Keydown but a secuenace

  }

  ///
  return (
    <div>
      {error}
      {loading && <h1>Loading  .....</h1>}
      <input type="text" onChange={handleChange} />
      <ul className="beersList">
        {beers.map(beer => {
          return (
            <Link key={beer._id} to={`/beer/${beer._id}`}>
              <li>

                <img src={beer.image_url} alt={beer.name} />
                <div className="infobeerlist">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <p> <strong>Created by : </strong>{beer.contributed_by}</p>
                </div>

              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default AllBeers
