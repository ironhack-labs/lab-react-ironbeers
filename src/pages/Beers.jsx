import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

function Beers() {
    const [beers, setBeers] = useState([]);

    const getBeers = async() => {
        try {
            const response = await axios.get(apiURL);
            setBeers(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeers();
    }, [])
  return (
    <div>
        <h1>List of Beers</h1>
        {beers && (
            beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="" />
                        <h3>{beer.name}</h3>
                        <h6>{beer.tagline}</h6>
                        <p><strong>Created by:</strong>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Details</Link>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default Beers