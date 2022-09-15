import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import DetailBeer from '../../components/detail-beer/DetailBeer'

function DetailScreen() {
  const {id} = useParams()
  const [beer, setBeer] = useState(null)
  
  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((res) => {
      setBeer(res.data)  
    })
    .catch((error) => console.error(error))
  }, [id])

  return (
      <div className='d-flex flex-column align-items-center'>
        {beer ? 
          (<DetailBeer {...beer}/> ) : 
          (<div className='mt-5 pt-5'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"><h1>Loading...</h1></span>
              </div>
            </div>
          )
        }
      </div>
         
  )
}

export default DetailScreen