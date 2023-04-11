import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';

function RandomBeer() {

  const [beer, setBeer] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers/random')
          .then(response => setBeer(response.data))
          .catch(error => console.log('An error has occurred obtaining a random beer', error));
      }, 500);
    };

    fetchData();
  }, []);

  const getContributedBy = (contributor) => {
    if (contributor) {
      return contributor.split('<')[0].trim();
    } else {
      return '-';
    }
  }


  return (
    <div>
      {beer ? (
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
      ) : (
        <div className="w-full mt-40 flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default RandomBeer