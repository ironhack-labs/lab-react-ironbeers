import { useState, useEffect } from 'react';
import Beer from './Beer'
import beersAPI from '../api_controler/api-controler';

function AllBeer () {
    
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        beersAPI.getAllBeers()
        .then((response) => {
            setBeers(response);
            console.log(response)
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