import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import { randomBeer } from '../../services/BeerService';
import './SingleBeer.scss'

const SingleBeer = ({beers}) => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const [randomBeerChoosen, setRandomBeerChoosen] = useState(null)
  const finalBeer = beer || randomBeerChoosen

  useEffect(() => {
    const beerFound = beers.find(beer => beer._id === id)
    setBeer(beerFound)
  },[])

  useEffect(() => {
    randomBeer()
      .then((response) => {
        setRandomBeerChoosen(response)
      })
 },[])


  return (
    <div>
      <Header />
      <div className="container">
        {finalBeer &&
          (
            <div className="beer" key={finalBeer._id}>
              <div className="beer__capture">
                <img className="beer__image" src={finalBeer.image_url} alt={finalBeer.name} />
              </div>

              <div className="beer__info">
                <h1 className="beer__name">{finalBeer.name}</h1>
                <p className="beer__tagline">{finalBeer.tagline}</p>
                <p className="beer__brewed">{finalBeer.first_brewed}</p>
                <p className="beer__level">{finalBeer.attenuation_level}</p>
                <p className="beer__description">{finalBeer.description}</p>
                <p className="beer__contributed">{finalBeer.contributed_by}</p>
              </div>
            </div>
          )  
        }
      </div>
    </div>
  )
}

export default SingleBeer