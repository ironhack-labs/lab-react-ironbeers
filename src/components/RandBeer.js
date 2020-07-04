import React, { Component } from 'react';
import HomeLink from './HomeLink';

const RandBeer =(props)=> {
    console.log(props.beers)
        
        return (
            <div>
                <HomeLink />
               <h1>RandBeers</h1> 
            </div>
        );
}

export default RandBeer;