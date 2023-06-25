import './BeersList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BeersList = () => {

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                console.log(response.data[0]);
                setBeers(response.data);
            })
            .catch(e => console.log(e))
    }, [])

    return <div className="BeersList">
        {beers.map(beer => {
            return <Link to={`/beers/${beer._id}`} key={beer._id}>
                <div className="Beer">
                    <div className="img-container">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="text-container">
                        <h3>{beer.name}</h3>
                        <h4>{beer.tagline}</h4>
                        <p>Create by: <span>{beer.contributed_by.split(" <")[0]}</span></p>
                    </div>
                </div>
                <hr />
            </Link>
        })}
    </div>
}

export default BeersList;