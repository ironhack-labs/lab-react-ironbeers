import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchBeers, setSearchBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      setBeers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container text-center mt-4">
      <h2>All Beers</h2>
      {/* <form action="">
        <input
          className="form-control"
          type="searchBeers"
          placeholder="Search for a beer!"
        />
      </form> */}

      <div className="d-flex flex-wrap gap-5 my-5 justify-content-center">
        {beers.map((beer) => {
          return (
            <div
              className="w-25 bg-light border rounded p-4 d-flex flex-column align-items-center justify-content-center gap-1"
              key={beer._id}
            >
              <Link to={`/beers/${beer._id}`}>
                <img className="beer-img w-25" src={beer.image_url} />{' '}
              </Link>
              <br />
              <h3 className="fs-4">{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
