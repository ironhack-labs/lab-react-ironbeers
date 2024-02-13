import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    // const handleBeersAdded = newBeer => {
    //     setBeers([...beers, newBeer]);
    // }
    
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => {
            console.log(res.data);
            setBeers(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    
    
    return (
        <div>
            {beers.map(beer => {
                return (
                <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img style={{ width: "5%" }} src={beer.image_url}/>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>
                </div>
                )
            })}
        </div>
    );
}

export default AllBeersPage;
