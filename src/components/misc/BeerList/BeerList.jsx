import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

import './BeerList.css'
import Beer from '../Beer/Beer';

const BeerList = ({beers}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(beers) {
            setLoading(false)
        }
    }, [beers])

    return (

        <>          
            {loading ? (<Loading></Loading>) : beers.map((beer) => (
                <div key={beer._id}>   
                    <Beer  beer={beer}>
                    </Beer>
                </div>

            ))}
        </>

    );
};

export default BeerList;