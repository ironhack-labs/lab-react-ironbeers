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
                setBeers(response.data);
            })
            .catch(e => console.log(e))
    }, [])

    return <div className="BeersList">
        {beers.map(beer => {
            return <div className="Beer" key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                    <div className="img-container">
                        <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className="text-container">
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>Create by: <span>{beer.contributed_by.split(" <")[0]}</span></p>
                    </div>
                </Link>
                <hr />
            </div>
        })}
    </div>
}

export default BeersList;