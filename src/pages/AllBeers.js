import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

function AllBeers() {

  const [beers, setBeers] = useState(null)
  const [value, setValue] = useState('')

  useEffect(()=> {
    async function getBeers() {
      const { data } = await axios.get(baseURL)
      console.log(data)
      setBeers(data)
    }

    getBeers()
  }, [])

  const onChange = async ({ target: { value: inputVal } }) => {
    setValue(inputVal)
    const { data } = await axios.get(`${baseURL}/search?q=${value}`)
    setBeers(data)
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text mx-auto">
          <Link to="/">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
            <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          </svg>
          </Link>
        </span>
      </nav>
      <div className="container pt-4">
      <input onChange={onChange}></input>
        {beers?
        <div className="row">
          <div className="card-group">

            {beers.map(beer => 
              <div key={beer._id} className="col-6">
                <div className="card mb-3">
                  <Link to={`/beers/${beer._id}`}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={beer.image_url} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{beer.name}</h5>
                        <p className="card-text">{beer.tagline}</p>
                        <p className="card-text"><small className="text-muted">{beer.contributed_by}</small></p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
        :
        <p>loading...</p>
        }
      </div>
    </div>
  )
}

export default AllBeers