import { useEffect, useState } from 'react';
import axios from 'axios';

function BeerCard () {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data)
            })
    }, []); 

    return (
        <div>
            {beers.map((beer) => {
                return (
                    <li key={beer._id}>
                            <div className="beerimg">
                                <img src={beer.image_url} alt="beer-img" width='5%'/>
                            </div>
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <b><p>Created by: {beer.contributed_by}</p></b>
                            <hr></hr>
                        </li>
                )
            })}
        </div>
    )
}
export default BeerCard;