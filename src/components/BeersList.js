import './BeersList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BeersList = () => {

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value)
        axios
            .get(`${baseUrl}/search?q=${e.target.value}`)
            .then(response => {
                setBeers(response.data)
            })
            .catch(e => console.log(e))
    }

    const renderBeers = () => {
        return beers.map(beer => {
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
        })
    }

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                setBeers(response.data);
            })
            .catch(e => console.log(e))
    }, [])

    return <div className="BeersList">
        <div className="BeersSearch">
            <input type="text" onChange={handleChange}/>
        </div>
        {renderBeers()}
    </div>
}

export default BeersList;