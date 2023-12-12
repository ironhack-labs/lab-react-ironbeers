import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className='beersList'>

      {beers.map((beer) => {
        const contributorName = beer.contributed_by.split('<')[0].trim();
  
        return (
          <div className='all-beers-container' key={beer._id}>

            <Link className='each-beer' to={`/beers/${beer._id}`}>

              <div className='beer-info'>
              
                <img src={`${beer.image_url}`} alt={`photo of ${beer.name}`} />

                <div>
                  <h2 className='beer-name'>{beer.name}</h2>
                  <p className='tagline'>{beer.tagline}</p>
                  <p className='contribution'>
                    <span className='created-by'>Created by:</span> {contributorName}
                  </p>
                </div>

              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );  
}

export default AllBeersPage;
