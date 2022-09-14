import {useState, useEffect, useCallback} from 'react'

import { getData } from '../services/getData'

import './AllBears.styles.css'

export const AllBeers = () => {
  const [dataBeer, setDataBeer] = useState([])

  const fetchData = useCallback(async() => {
    try{
      const response = await getData()
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
      <div className='container'>
        {dataBeer.length && dataBeer.map((beer, index) => {
          return(
            <div className='beerBox'>
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          )
        })}
      </div>
      

    </main>
  )
}