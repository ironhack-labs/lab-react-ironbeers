import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const[beers, setbeer] = useState()

    useEffect(() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then ((response) => {
            setbeer(response.data)
            console.log(response.data)
        })
    },[])
    if (!beers) {
        return <div>Loading...</div>;
    }
    return(
        <div>
            <h2>welcome to the all beers page</h2>
            {beers.map((beer) => (
                <Link to={`/beers/${beer._id}`} key={beer._id}>
                <div>
                <div><img src={beer.image_url}
                          style={{ height: '100px', objectFit: 'contain' }}/></div>
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>{beer.contributed_by}</h3>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default AllBeersPage;
