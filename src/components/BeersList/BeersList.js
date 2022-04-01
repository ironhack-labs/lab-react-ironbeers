import React, {useEffect, useState} from 'react';
import { listBeers, searchBeer } from '../../services/listBeersService';
import Beer from '../Beer/Beer';
import './BeersList.css';

const BeersList = () => {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listBeers()
            .then(response => {
                setLoading(false)
                setBeers(response)
            })
            .catch(e => console.error(e));
    }, []);

    const searchBeers = (event) => {
        const value = event.target.value;

        searchBeer(value)
            .then(res => {
                setBeers(res);
            })
            .catch(e => console.error(e));
    }

    return (
        <>
            {
                loading ? ( 
                    <div>Loading...</div> 
                    ) : (
                    <>
                        <input type="text" onChange={searchBeers} className="mt-4" placeholder="Search for a beer..."/>
                        <div className='beers-div'>
                            {beers.map(beer => {
                                return (
                                    <Beer beer={beer} key={beer._id}/>
                                )
                            })}
                        </div>
                    </>
                )
            }
        </>
    )
}

export default BeersList;