import React, { Component } from 'react';
import HomeLink from './HomeLink'
import axios from 'axios'
import App from '../App.js'


const RandBeer =(props)=>{
// STYLES===========================================================================================
    const infoSection={
        width: '781px',
        marginLeft: '27.5vw'
    }
    const img={
        textAlign: 'center',
        height: '256px',
        marginTop: '5vh',
        marginLeft: '42%'
    }
    const contributedBy={
        color: 'grey'
    }
    const outer={
        textAlign: 'center'
    }
    
// =================================================================================================

    let beers=props.beers
    const randNum=Math.floor(Math.random()*(beers.length-1))

    return (
        <div>
            <HomeLink />
            <div style={infoSection}>
                <img src={beers[randNum].image_url} style={img}/>
                <h1>{beers[randNum].name}<span style={{color: "grey", float: 'right'}}>{beers[randNum].attenuation_level}</span></h1>
                <h3 style={{color: "grey"}}>{beers[randNum].tagline}<span style={{color: 'black',float: 'right'}}>{beers[randNum].first_brewed}</span></h3>
                <p>{beers[randNum].description}</p>
                <p style={contributedBy}>{beers[randNum].contributed_by}</p>
            </div>    
        </div>
);

}

export default RandBeer;


