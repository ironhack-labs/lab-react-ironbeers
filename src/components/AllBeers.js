import React, { Component } from 'react';
import HomeLink from './HomeLink'
import './AllBeers.css'
// import { withRouter, Link } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import BeerPage from './BeerPage';

const AllBeers =(props)=> {
    console.log(props.beers)
    

    const displayBeers =()=>{
        return props.beers.map((eachBeer) => {
            return(
                <div className='divStyle'>
                    <Link to={eachBeer._id}>
                        <div className='imgDiv'>
                            <img src={eachBeer.image_url}/>
                        </div>
                        <div className='infoStyle'>
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