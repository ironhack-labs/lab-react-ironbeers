import {useState, useEffect, useCallback} from 'react'

import { getData } from '../services/getData'
import { BoxBeer } from "../components"
import './RandomBeer.styles.css'

export const RandomBeer = () => {
  const [dataBeer, setDataBeer] = useState([])

  const fetchData = useCallback(async() => {
    try{
      const response = await getData("beers/random")
      const { data } = response
      setDataBeer([data])
    }catch(e){
      console.log(e)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return(
    <main>
      <BoxBeer
        dataBeer={dataBeer}
        classNameDiv="container-random"
      />
    </main>

  )
}