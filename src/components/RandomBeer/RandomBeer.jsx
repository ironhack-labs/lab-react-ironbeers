import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router';
import BeerOne from '../BeerOne/BeerOne';
import BeatLoader from "react-spinners/BeatLoader";
import { getRandomBeer } from '../../baseService/baseService';

const usePrev = (key) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = key
  }, [key])
  return ref.current
}

const RandomBeer = () => {
  const [states, setState ] = useState({
    beer: {},
    loader: true
  })

  const { key } = useLocation()
  const prevKey = usePrev(key)
  
  useEffect (() => {
    if (prevKey !== key) {
      (async () => {
        const beer = await getRandomBeer()
        setState({ beer, loader: false })
      }) ()
    } 

  },[key, prevKey])

  return (
      <>
      {
        states.loader
        ? <div className="spin"><BeatLoader size={15} /></div>
        : (
          <>
            <h1 style={{marginTop: 60, marginLeft: 30, color: "#a90000"}}>Random Beer</h1>
            <hr/>
            <BeerOne {...states.beer}/>
          </>
        )
      }
      </>
  )
}

export default RandomBeer