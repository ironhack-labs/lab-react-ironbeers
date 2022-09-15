import {useState, useEffect, useCallback} from 'react'
import { BoxBeer } from '../components'

import { getData } from '../services/getData'

import './AllBears.styles.css'

export const AllBeers = () => {
  const [dataBeer, setDataBeer] = useState([])

  const fetchData = useCallback(async() => {
    try{
      const response = await getData("beers")
      const { data } = response
      setDataBeer(data)
    }catch(e){
      console.log(e)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  console.log(dataBeer)
  return(
    <main className='main'>
      <BoxBeer 
        dataBeer={dataBeer}
      />
      

    </main>
  )
}