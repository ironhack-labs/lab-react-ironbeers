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

    // let cur=props.beers
    let beer=[]
    if(props.rand == 'true'){
        let randNum=Math.floor(Math.random()*(props.beers.length-1))
        beer = props.beers[randNum]
    } else {
        beer = props.beers.find(eachBeer=>{
            return eachBeer._id === props.match.params.id
        })
    }


    console.log(beer)

    return (
        <div>
            <HomeLink />     
                <div className={infoSection}>
                    <img src={beer.image_url} style={img}/>
                    <h1>{beer.name}<span style={{color: "grey", float: 'right'}}>{beer.attenuation_level}</span></h1>
                    <h3>{beer.tagline}<span style={{color: 'black',float: 'right'}}>{beer.first_brewed}</span></h3>
                    <p>{beer.description}</p>
                    <p style={contributedBy}>{beer.contributed_by}</p>
                </div>    
        </div>
    );
}





export default BeerPage;