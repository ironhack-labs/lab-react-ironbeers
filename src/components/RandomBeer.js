import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomBeer() {
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            setBeer(response.data);
        })
        .catch((error) => {
            console.log('Error getting random beer from API',error);
        });
    }, []);

    const renderDetails = () => {
        return (
          <>
            <div className='card col m-auto mt-3 mb-3 text-bg-light ms-1 me-1' key={beer._id}>
              <h3 className='card-header text-center'>{beer.name}</h3>
              {beer.image_url
               ? 
               (<img className='beer-details card-img rounded p-3' src={beer.image_url} alt='' />)
               : 
               (<img className='beer-details card-img rounded p-3' src='../assets/no-beer.jpg' alt='' />)
              }
              <div className='card-body text-bg-dark'>
                <div className='card-text'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-warning rounded text-center'><em>{beer.tagline}</em></li>
                  </ul>
                </div>
                <div className='card-text mt-3 mb-4'>{beer.description}</div>
                <div className='card-text row text-bg-light rounded m-3'>
                  <div className='col-8'>First brewed: {beer.first_brewed}</div>
                  <div className='col-4 text-end m-auto'>{beer.attenuation_level}</div>
                </div>
              </div>
              <div className='card-footer text-muted text-center'>
                {beer.contributed_by}
              </div>
            </div>
            <div className='text-center p-2'>
              <Link className='btn btn-warning text-dark' to='/'>
                Back
              </Link>
            </div>
          </>
        );
    }

    return (
        <div className='cards'>
            {beer && renderDetails()}
        </div>
      )
}

export default RandomBeer;