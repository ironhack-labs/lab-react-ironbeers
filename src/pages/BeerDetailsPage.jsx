import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../config/api'
function BeerDetailsPage () {
  const [beer, setBeer] = useState()
  const { beerId } = useParams()

  const navigate = useNavigate()

  const getBeer = () => {
    axios
      .get(`${API_URL}/beers/${beerId}`)
      .then(res => {
        console.log(res)
        setBeer(res.data)
      })
      .catch(e => console.log('the error is', e))
  }
  useEffect(() => {
    getBeer()
  }, [])

  return (
    <div className='d-inline-flex flex-column justify-content-center align-items-center w-100 p-4'>
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt='Beer Image'
            height='300px'
            width='auto'
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className='btn btn-primary'
            onClick={() => {
              navigate(-1)
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  )
}

export default BeerDetailsPage
