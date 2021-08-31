import React from 'react';
import APIHandler from '../APIHandler';
const api = new APIHandler("https://ih-beers-api2.herokuapp.com")
 function AllBeers() {
    return(
        <>
=        <h1>All Beers</h1>
        </>
    );
}

export default AllBeers