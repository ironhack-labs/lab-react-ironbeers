import React from 'react'
import BeersList from './Beers-list'
import Header from './layout/Header';

const Beers = () => {

    return (


        <>
            <header>

                <Header />

            </header>

            <div>
                <BeersList />
            </div>
        </>
    )
}

export default Beers