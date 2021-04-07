import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import BeatLoader from "react-spinners/BeatLoader";
import { getOneBeer } from '../../baseService/baseService';
import BeerOne from '../BeerOne/BeerOne';

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
    }) ()

  },[id])

  return (
    <>
      {
        states.loader
        ? <div className="spin"><BeatLoader size={15} /></div>
        : (
          <div className="BeerDetail">
            <BeerOne {...states.beer} />
          </div>
        )
      }
    </>
  )
}

export default BeerDetail
