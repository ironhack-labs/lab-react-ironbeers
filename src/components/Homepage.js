import React from 'react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
        <NavLink to={'/beers'}>All Beers</NavLink>
        <NavLink to={'/random-beer'}>Random Beer</NavLink>
        <NavLink to={'/new-beer'}>New Beer</NavLink>
        </>
    );
}

export default Homepage;
