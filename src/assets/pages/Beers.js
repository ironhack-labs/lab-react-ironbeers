import { Divider, Row } from 'antd'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getAllBeers } from '../../services/service'
import BeerCard from '../components/BeerCard'

export const BeerLoader = async () => {
  const {data : allBeers} = await getAllBeers()
console.log(allBeers)
  return {allBeers}
  
}

function Beers() {
  const {allBeers} = useLoaderData()

  return (
    <>
    <Divider>Beers</Divider>
    <div>
    <Row gutter={[16, 24]} className='beers'>
      {allBeers.map((beers) => (
        <BeerCard key={beers._id} {...beers} />
      ))}
    </Row>
    </div>

  </>
  )
}

export default Beers