import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpBeers from "../services/baseBeersServices";


const AllBeersPage = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        httpBeers.get("/")
        .then((response) => {
            setBeers(response); 
        })
        .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <h1>All Beers</h1>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                    <Link to={`/beerDetails/${beer._id}`}>See details</Link>
                </div>
            ))}
            
        </div>
    );
};

export default AllBeersPage; 
