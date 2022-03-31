import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import { randomBeer } from '../../services/BeerService';
import './SingleBeer.scss'

const SingleBeer = ({beers}) => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const [randomBeerChoosen, setRandomBeer] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const beerFound = beers.find(beer => beer._id === id)
    setBeer(beerFound)
  },[])

  useEffect(() => {
    randomBeer()
      .then((response) => {
        setRandomBeer(response)
      })
 },[])


  return (
    <div>
      <Header />
      <div className="container">
        {beer && pathname !== '/random-beer' &&
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
          )  
        }

        {randomBeerChoosen && pathname === '/random-beer' &&
        (
            <div className="beer" key={randomBeerChoosen._id}>
              <div className="beer__capture">
                <img className="beer__image" src={randomBeerChoosen.image_url} alt={randomBeerChoosen.name} />
              </div>

              <div className="beer__info">
                <h1 className="beer__name">{randomBeerChoosen.name}</h1>
                <p className="beer__tagline">{randomBeerChoosen.tagline}</p>
                <p>{randomBeerChoosen.first_brewed}</p>
                <p>{randomBeerChoosen.attenuation_level}</p>
                <p>{randomBeerChoosen.description}</p>
                <p className="beer__contributed">{randomBeerChoosen.contributed_by}</p>
              </div>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default SingleBeer