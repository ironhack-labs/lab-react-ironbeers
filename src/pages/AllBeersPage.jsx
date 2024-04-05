import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AllBeersPage() {
  const [beers, setBeer] = useState([])
  const [search, setSearch] = useState('')
  const getAllBeers = () => {
    axios
      .get(`${API_URL}/beers`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBeers()
  }, [])

  const getFiltered = (search) => {
    axios
      .get(`${API_URL}/beers/search?q=${search}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {

    if (search) {
      getFiltered(search)
    }
  }, [search])
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {beers.map((beer) => (
          <li key={beer._id} >
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="" style={{ width: "120px" }} />
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          </li>
        ))

        }
      </ul>
    </div>
  )
}

export default AllBeersPage;
