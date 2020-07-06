import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HomeLink from './HomeLink'
import './AllBeers.css'

const AllBeers =(props)=> {
    console.log('allBeer page load')

    console.log(props.beers)
    
    const divStyle={
        display: 'flex',
        border: '1px solid lightgrey',
    }
    
    const infoStyle={
        color: 'black',
        float: 'right'
    }
    
    const imgDiv={
        width: '125px',
        // textAlign:'center',
        marginRight: '75px'
    }
    const imgStyle={
        padding: '15px 10px',
        height: '245px'
    }


    const displayBeers =()=>{
        return props.beers.map((eachBeer) => {
            return(
                <div style={divStyle}>
                    <Link to={eachBeer._id} style={{width: '100%', display: 'flex', textDecoration:'none'}}>
                        <div style={imgDiv}>
                            <img src={eachBeer.image_url} style={imgStyle}/>
                        </div>
                        <div style={infoStyle}>
                            <h1>{eachBeer.name}</h1>
                            <h3>{eachBeer.tagline}</h3>
                            <p>{eachBeer.contributed_by}</p>
                        </div>
                    </Link>
                </div>
            );
        });    
    }


    return (
        <div>
            <HomeLink />
            {displayBeers()}
        </div>
    );
}

export default AllBeers;