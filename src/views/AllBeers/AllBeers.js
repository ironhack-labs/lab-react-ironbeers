import React from 'react';
import BeersList from './../../components/BeersList/BeersList';
import Navbar from './../../components/Navbar/Navbar';
import './AllBeers.css';

const AllBeers = () => {
    return (
        <>
            <Navbar />
            <BeersList />
        </>
    );
};

export default AllBeers;