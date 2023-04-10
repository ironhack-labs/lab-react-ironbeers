import React from 'react'
import { useParams } from 'react-router-dom'


function BeerDetail({ beerList }) {

  const { beerId } = useParams();
  const beer = beerList.find((beer) => beer._id === beerId);

  const getContributedBy = (contributor) => {
    if (contributor) {
      return contributor.split('<')[0].trim();
    } else {
      return '-';
    }
  }

  if (!beer) {
    return <div className="text-center my-20 text-2xl font-bold">Beer not found</div>
  }

  return (
    <div>
      <img className="w-2/12 h-auto mx-auto mt-10" src={beer.image_url} alt={beer.name} />

      <div className="flex mx-8 mt-10 mb-4">
        <div className="w-2/3 h-10 flex items-center font-black text-xl">{beer.name}</div>
        <div className=" w-1/3 h-10 flex items-center justify-end font-bold text-2xl text-gray-400">{beer.attenuation_level}</div>
      </div>

      <div className="flex mx-8 mb-2">
        <div className="w-2/3 h-10 flex items-center text-base text-gray-400">{beer.tagline}</div>
        <div className=" w-1/3 h-10 flex items-center justify-end font-bold">{beer.first_brewed}</div>
      </div>

      <p className="px-8">{beer.description}</p>

      <h3 className="px-8 mt-2 text-lg font-bold italic text-yellow-300">{getContributedBy(beer.contributed_by)}</h3>
    </div>
  )
}

export default BeerDetail