import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';
import Header from '../../components/Header/Header';
import './SingleBeer.scss'

const SingleBeer = ({beers}) => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    const beerFound = beers.find(beer => beer._id === id)
    setBeer(beerFound)
  },[])


  return (
    <div>
      <Header />
      <div className="container">
        <h1>Details</h1>
        {beer ?
          (
            <div className="beer" key={beer._id}>
              <div className="beer__capture">
                <img className="beer__image" src={beer.image_url} alt={beer.name} />
              </div>

              <div className="beer__info">
                <h1 className="beer__name">{beer.name}</h1>
                <p className="beer__tagline">{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p className="beer__contributed">{beer.contributed_by}</p>
              </div>
            </div>
          ) :
          "...Loading"
        }
      </div>
    </div>
  )
}

export default SingleBeer