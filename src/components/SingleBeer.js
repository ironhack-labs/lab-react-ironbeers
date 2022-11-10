import React from 'react'
import { useParams } from 'react-router-dom';

function SingleBeer({ beers }) {
    const params = useParams();
    const beerId = params.id.substring(1);
    console.log(beerId);
    const singleBeer = beers.find((elem) => elem._id === beerId)
    console.log(singleBeer);
  return (
    <div>
        <img src={singleBeer.image_url} alt={singleBeer.name} />
    </div>
  )
}

export default SingleBeer