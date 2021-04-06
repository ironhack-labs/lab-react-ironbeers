import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getOneBeer } from '../../baseService/baseService';

const BeerDetail = () => {
  const [states, setState ] = useState({
    beer: {},
    loader: true
  })

  const { id } = useParams()

  useEffect (() => {

    (async () => {
      const beer = await getOneBeer(id)
      setState({ beer, loader: false })
    }) () // TODO: Understand

  },[id])

    return (
        <div className="BeerDetail">
            <p>{states.beer.name}</p>
        </div>
    )
}

export default BeerDetail
