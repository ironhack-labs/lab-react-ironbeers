import React, { Link, Component } from 'react';
import HomeLink from './HomeLink';




const BeerPage =(props)=> {

    // STYLES===========================================================
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
    // ===================================================================

    let beer=[]
    //Checks to see if incoming call was from the random button 
    if(props.rand == 'true'){
        let randNum=Math.floor(Math.random()*(props.beers.length-1))
        beer = props.beers[randNum]
    } else {
        beer = props.beers.find(eachBeer=>{
            return eachBeer._id === props.match.params.id
        })
    }


    const displayBeer =()=>{
        //Only executes if beer has property. Fixes issue with undefined errors on AddBeer
        if(beer != undefined){
            return <div className={infoSection}>
                        <img src={beer.image_url} style={img}/>
                        <h1>{beer.name}<span style={{color: "grey", float: 'right'}}>{beer.attenuation_level}</span></h1>
                        <h3>{beer.tagline}<span style={{color: 'black',float: 'right'}}>{beer.first_brewed}</span></h3>
                        <p>{beer.description}</p>
                        <p style={contributedBy}>{beer.contributed_by}</p>
            </div>  
        }
    }

    return (
        <div>
            <HomeLink />     
            {displayBeer()}  
        </div>
    );
}

export default BeerPage;