import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchedBeer, setSearchedBeer] = useState('');
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      setBeers(response.data);
      setFilteredBeers(response.data);
      setFetching(false);
    });
  }, []);

  const handleSearch = () => {
    if (searchedBeer) {
      setFetching(true);
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedBeer}`).then((response) => {
        setFilteredBeers(response.data);
        setFetching(false);
      });
    } else {
      setFilteredBeers(beers);
    }
  };

  return (
    <section className='d-flex justify-content-center align-items-center'>
      {fetching && <p>Loading...</p>}
      <div className='d-flex flex-row flex-wrap justify-content-center align-items-center' style={{ width: '80%' }}>
        <div>
          <input
            type="text"
            name="searchedBeer"
            value={searchedBeer}
            onChange={(e) => {
              setSearchedBeer(e.target.value);
            }}
          />
          <button className='btn btn-outline-primary search-button' onClick={handleSearch}>Search</button>
        </div>
        {filteredBeers && filteredBeers.map((beer) => (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <div className="card beer-list m-3" style={{ width: '40rem' }}>
              <div>
                <img src={beer.image_url} className="card-img-top" alt="Beer image" />
              </div>
              <div className="card-body" style={{ maxWidth: '30rem' }}>
                <h2 className="card-text">{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        ))}
        {!filteredBeers && beers.map((beer) => (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <div className="card beer-list m-3" style={{ width: '40rem' }}>
              <div>
                <img src={beer.image_url} className="card-img-top" alt="Beer image" />
              </div>
              <div className="card-body" style={{ maxWidth: '30rem' }}>
                <h2 className="card-text">{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AllBeersPage;
