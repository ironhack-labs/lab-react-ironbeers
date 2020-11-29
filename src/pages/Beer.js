import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers/'

function Beer({
  match: { params: { id } },
  history
}) {

  const [beer, setBeer] = useState(null)

  useEffect(()=> {
    async function getBeer() {
      const { data } = await axios.get(`${baseURL}${id}`)
      console.log(data)
      setBeer(data)
    }

    getBeer()
  }, [])

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
      <div className="container mt-4">
        <div className="row">
          {beer?
          <div className="card mb-3">
            <div className="d-flex justify-content-center py-4">
              <img src={beer.image_url} className="card-img-top" alt={beer.name} style={{width: "5rem"}}/>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.attenuation_level}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text">{beer.tagline}</p>
                <p className="card-text">{beer.first_brewed}</p>
              </div>
              <p className="card-text">{beer.description}</p>
              <p className="card-text"><small className="text-muted">{beer.contributed_by}</small></p>
              <a onClick={() => history.goBack()} className="btn btn-primary">Back</a>
            </div>
          </div>
          :
          <p>loading...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Beer