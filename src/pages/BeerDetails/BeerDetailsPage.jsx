import './BeerDetailsPage.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function BeerDetailsPage(){
    const [beer, setBeer] = useState(null);
    const { beerId } = useParams()

    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
          setBeer(response.data);
        })
        .catch((error) => console.log(error));
    }, [beerId]);

    return (
        <div className='BeerDetails'>
          {!beer && <h3>Beer not found!</h3>}
          
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
            </div>

            
          </div>
          )}
        </div>
    );
}

export default BeerDetailsPage
