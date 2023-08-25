import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            setBeers(response.data);
        })
    }, []);

    return (
        <div>
            <h3>List of Beers</h3>
            {beers.map((beer) => {
                return(
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url}/>
                        <div>
                            <h3>Name: {beer.name}</h3>
                            <h3>Tagline: {beer.tagline}</h3>
                            <h3>Contributed by: {beer.contributed_by}</h3>
                        </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
