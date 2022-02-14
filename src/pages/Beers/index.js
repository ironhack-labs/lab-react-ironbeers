import './BeersStyle.css'
import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/consts';

function Beers() {
    const [beersState, setBeersState] = useState({
      data: {},
      loading: true
    });

    useEffect(() => {
      axios.get(BASE_URL).then(res => {
        setBeersState({
          data: res.data,
          loading: false,
        });
      })
    }, [])

    const handleSearch = e => {
      axios.get(BASE_URL + `/search?q=${e.target.value}`).then(res => {
        setBeersState({
          data: res.data,
          loading: false
        })
      })
    }

    return (
      <div className="Beers">
        <Navbar />

        <input placeholder="Search for a beer" onChange={handleSearch} />

        <h1>The Beers</h1>
        {beersState.loading ? (
          <h4>Loading ...</h4>
        ) : (
          <div>
            {beersState.data.map((beer) => (
              <div key={beer._id}>
                <img src={beer.image_url} alt="Beer" />
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p>
                  <b>Created by: </b>
                  {beer.contributed_by}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default Beers;