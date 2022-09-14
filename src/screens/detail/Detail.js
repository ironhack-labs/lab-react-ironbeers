import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import DetailBeer from '../../components/detail-beer/DetailBeer'

function Detail() {
  const {id} = useParams()
  const [beer, setBeer] = useState({})
  
  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((res) => {
      setBeer(res.data)  
    })
    .catch((error) => console.error(error))
  }, [])

  return (    
      <DetailBeer {...beer}/>    
  )
}

export default Detail