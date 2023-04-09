import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import beersService from '../services/beers.service'

export default function BeersDetail() {
  const [beer, setBeer] = useState({})

  const { id } = useParams({})

  console.log(id)

  useEffect(() => {
    if (id) {
      beersService.detail(id)
        .then((foundBeer) => {
          console.log(foundBeer)
          setBeer(foundBeer)
        })
        .catch(console.error)
    }
  }, [id])

  if (!beer.id) return null

  return (
    <>
      <Header />
      <div className='flex flex-col mt-3 p-4'>
        <img className='h-auto w-16 self-center' src={beer.image} alt="beer" />
        <div className='flex mt-4 justify-between' >
          <span className='text-3xl'>{beer.name}</span>
          <span className='text-2xl text-gray-400'>{beer.attenuationLevel}</span>
        </div>
        <div className='flex mt-2 justify-between'>
          <span className='text-lg text-gray-400'>{beer.tagline}</span>
          <span className='text-s font-bold'>{beer.firstBrewed}</span>
        </div>
        <p className='font-semibold mt-3'>{beer.description}</p>
        <p className='font-semibold text-gray-400 mt-3'>{beer.contributedBy}</p>
      </div>
    </>
  )
}
