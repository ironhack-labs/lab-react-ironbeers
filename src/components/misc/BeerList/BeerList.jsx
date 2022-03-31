import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Beer from '../Beer/Beer';
import './BeerList.css'

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