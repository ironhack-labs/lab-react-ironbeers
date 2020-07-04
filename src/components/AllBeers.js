import React, { Component } from 'react';
import HomeLink from './HomeLink'
import { withRouter } from 'react-router-dom';

const AllBeers =(props)=> {
    console.log(props.beers)
    
    


        return (
            <div>
                <HomeLink />
                <h1>All Beers</h1>
            </div>
        );
}

export default AllBeers;