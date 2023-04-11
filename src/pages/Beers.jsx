import React from 'react'
import { Link } from 'react-router-dom';

function Beers({ beerList }) {

  const getContributedBy = (contributor) => {
    if (contributor) {
      return contributor.split('<')[0].trim();
    } else {
      return '-';
    }
  }

  return (
    <div className="container p-6">

      <div className="grid grid-cols-1 gap-10">
        {beerList.map((beer) => (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <div className="border-b h-60 flex">
              <div className="h-full w-2/5 flex justify-center items-center">
                <img className="h-auto w-1/3" src={beer.image_url} alt="" />
              </div>
              <div className="h-full w-3/5 flex flex-col justify-center px-6">
                <h1 className="font-black text-xl my-2">{beer.name}</h1>
                <h2 className="text-base text-gray-600">{beer.tagline}</h2>
                <p className="text-xs"><span className="font-semibold">Created by</span>: {getContributedBy(beer.contributed_by)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Beers