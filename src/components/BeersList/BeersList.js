import React, {useEffect, useState} from 'react';
import { listBeers } from '../../services/listBeersService';
import Beer from '../Beer/Beer';

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
    }, [])


    return (
        <>
            {
                loading ? ( 
                    <div>Loading...</div> 
                    ) : (
                    <div className='beers-div'>
                        {beers.map(beer => {
                            return (
                                <Beer beer={beer} key={beer._id}/>
                            )
                        })}
                    </div>
                )
            }
        </>
    )
}

export default BeersList;