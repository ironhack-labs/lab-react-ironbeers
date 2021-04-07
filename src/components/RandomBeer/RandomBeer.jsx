import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router';
import BeerOne from '../BeerOne/BeerOne';
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
        <BeerOne {...states.beer}/>
      </>
  )
}

export default RandomBeer