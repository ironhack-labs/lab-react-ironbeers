import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function BeersPage() {
    const API_URL = process.env.REACT_APP_BASE_URL;
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/beers`)
        .then(response => setBeers(response.data))
        .catch(err => console.log(err))
        // eslint-disable-next-line 
    }, [])

    if(beers.length === 0){
        return <>
            <p>Loading...</p>
        </>
    }

    return (
        <div>
        {beers.map((beer) => (
        <div key={beer._id} className="card" >
            <div className="beersImg">
                <img src={beer.image_url} height="200" alt="beer" />
            </div>

            <div className="beersDetail">
                <h3>
                <Link to={`/beers/${beer._id}`}> 
                {beer.name} 
                </Link>
                </h3>
                <h6>{beer.tagline}</h6>
                <p>Created by: {beer.contributed_by} </p>
            </div>
        </div>
           
        ))}
            
        </div>
        );
}

export default BeersPage;