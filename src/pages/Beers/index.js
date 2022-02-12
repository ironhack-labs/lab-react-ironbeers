import './BeersStyle.css'
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from 'axios';
import { Link } from 'react-router-dom';

const beersURL = "https://ih-beers-api2.herokuapp.com/beers/";

function Beers() {
    const [fetching, setFetching] = useState(true);
    const [theBeers, setTheBeers] =useState([]);

    useEffect(() => {
        axios.get(beersURL).then(res => {
            console.log(res.data);
            setTheBeers(res.data);
            setFetching(false);
        })
    }, [])

    return (
      <div className="Beers">
        <Navbar />

        {fetching ? (
          <h4>Loading ...</h4>
        ) : (
          <div>
            {theBeers.map((beer) => (
              <div>
                <img src={beer.image_url} alt="Beer" />
                <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                <h3>{beer.tagline}</h3>
                <p><b>Created by: </b>{beer.contributed_by}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default Beers;
