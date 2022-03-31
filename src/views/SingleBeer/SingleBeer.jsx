import React from 'react';
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/misc/Loading/Loading';



const SingleBeer = ({beers}) => {


  const { id } = useParams()

  const [loading, setLoading] = useState(true)

    
    const beerFound = beers.find(beer =>  beer._id === id)
    
     useEffect(() => {
        if(beerFound) {
            setLoading(false)
        }
    }, [beerFound])

  return (
    <div className="container mt-5">
      {loading ? <Loading></Loading> : 
        <div>
        <img src={beerFound.image_url} alt={beerFound.name} />
        <p>{beerFound.name}</p>
        <p>{beerFound.tagline}</p>
        <p>{beerFound.description}</p>
        <p>{beerFound.contributed_by}</p>
        <p>{beerFound.first_brewed}</p>
        <p>{beerFound.attenuation_level}</p>
        </div>
       }
    </div>
  );
};

export default SingleBeer;