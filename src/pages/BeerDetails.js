import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import OneBeer from '../components/OneBeer';

function BeerDetails({match: {params: {id}} }) {
    const [ beer, setBeer ] = useState(null); 
        
    useEffect(() => {
        const getBeerData = async () => {
            try {
                let beerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
                setBeer(beerData.data);
            }
            catch(error) {
                throw new Error("Failed to get the beer", error);
            }
        }

        getBeerData();
    }, [])
    
    if (!beer) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <Header />
            <OneBeer beer={beer} />
        </>
    )
}

export default BeerDetails;
