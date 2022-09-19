import React, { useEffect, useState } from 'react'
import Detail from '../../components/detail/Detail'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailScreen() {

  const { id } = useParams() 
  const [ beer, setBeer ] = useState()
  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((beer) => {
        setBeer(beer.data)
      })
  }, [id])
  

  return (
    <div className="container">
      <Header />
      <Detail {...beer}/>
    </div>
  )
}

export default DetailScreen