import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function AllBeersPage() {

        const [beers, setBeers] = useState([]);

    const getAllBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            console.log(response.data)
            setBeers(response.data)
        } catch (error) {
            console.log('error fetching the beers', error)
        }
    }

    useEffect (() => {
        getAllBeers();
    }, []);

    return (
        <div>
            {beers.map(beer => {
                return (
                    <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <Link to={`/beers/${beer._id}`}>
                    <h1>{beer.name}</h1>
                    </Link>

                    <h2>{beer.tagline}</h2>
                    <h3>Created by: {beer.contributed_by}</h3>
                    

                    </div>
                )
            })}

        </div>

    );
    }

export default AllBeersPage;
