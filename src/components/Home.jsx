import React from 'react';
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';

const Home = () => {
    return(
        <>
            {/* <Beers/> */}
            <RandomBeer/>
            <NewBeer/>
        </>
    )
}

export default Home;