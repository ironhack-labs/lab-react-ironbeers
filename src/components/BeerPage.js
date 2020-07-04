import React, { Link, Component } from 'react';
import HomeLink from './HomeLink';



const BeerPage =(props)=> {
    // STYLES===========================================================
    const infoSection={
        textAlign: 'center'
    }

    const contributedBy={

    }

    const img={
        height: '145px'
    }
    // ===================================================================

    let cur=props.beers
    let beer = cur.find(eachBeer=>{
        return eachBeer._id === props.match.params.id
    })



    console.log(beer)
    // console.log(props.beers.length)
    // const randNum=Math.floor(Math.random()*(props.beers.length-1))
    // console.log(randNum)

    return (
        <div>
            <HomeLink />     
            <h1>BeerPage</h1>
                {/* <div className={infoSection}>
                    <img src={props.beers.image_url} className={img}/>
                    <h1>{props.beers.name}<span>{props.beers.attenuation_level}</span></h1>
                    <h3>{props.beers.tagline}<span>{props.beers.first_brewed}</span></h3>
                    <p>{props.beers.description}</p>
                    <p className={contributedBy}>{props.beers.contributed_by}</p>
                </div>
             */}
        
        </div>
    );
}

export default BeerPage;