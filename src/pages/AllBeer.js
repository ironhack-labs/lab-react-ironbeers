import { useState, useEffect } from 'react';
import Beer from './Beer'
import axios from 'axios';

function AllBeer () {
    
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setBeers(response.data);
        })
    }, [])

    return(
        <div>
            {beers.map(beer => {
                return (
                <Beer beerIMG ={beer.image_url} name={beer.name} description={beer.description} creator={beer.contributed_by}/>
                )
            })}
        </div>
    );
};

export default AllBeer;