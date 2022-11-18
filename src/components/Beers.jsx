import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Beers() {
    const [allBeers, setAllBeers] = useState([]);

    const getBeersApi = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setAllBeers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeersApi();
    }, []);

    return (
        <div>
            <Navbar />

            {allBeers.map((beer) => {
                return (
                    <div key={beer._id} className="card">
                        <img src={beer.image_url} alt="beer" />
                        <Link to={`/beers/${beer._id}`}><h1>{beer.name}</h1></Link>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Beers