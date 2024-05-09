import './RandomBeerPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  const getRandomBeer=()=> {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div className='RandomBeer'>
      {beer && (
        <div class="card" style={{ border: '0', boxShadow: 'none' }}>
          <img
            src={beer.image_url}
            alt={beer.name}
            className="card-img-top"
          />
          <div class="card-body">
            <div className='row'>
              <div className="col">
                <h2 class="card-title display-4">{beer.name}</h2>
              </div>
              <div className="col">
                <p className='display-6'>{beer.attenuation_level}</p>
              </div>
            </div>
            <div className='row'>
              <div className="col">
                <p class="card-text h5" style={{ color: 'grey' }}>{beer.tagline}</p>
              </div>
              <div className="col">
                <p><strong>{beer.first_brewed}</strong></p>
              </div>
            </div>
            <p><strong>{beer.description}</strong></p>
            <p style={{ color: 'grey' }}>{beer.contributed_by}</p>
            <button onClick={getRandomBeer} className='btn btn-dark'>Get another random beer</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RandomBeerPage;
