import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function SingleBeer({ beers }) {
  const params = useParams();
  const beer = beers.filter(beer => beer._id === params.beersId)

  return (
    <>
      <Navbar />
      <div className='d-flex flex-column p-3'>
        <div className='text-center'>
          <img src={beer[0].image_url} alt={beer[0].name} width={50} />
        </div>
        <div className='mt-2 d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <p><b>{beer[0].name}</b></p>
            <span style={{color: 'gray'}} className='mx-5'>{beer[0].attenuation_level}</span>
          </div>
          <div className='d-flex justify-content-between'>
            <p style={{color: 'gray'}}>{beer[0].tagline}</p>
            <span className='mx-5'><b>{beer[0].first_brewed}</b></span>
          </div>
          <p>{beer[0].description}</p>
          <p style={{color: 'gray'}}>{beer[0].contributed_by}</p>
        </div>
      </div>
    </>
  )
}

export default SingleBeer