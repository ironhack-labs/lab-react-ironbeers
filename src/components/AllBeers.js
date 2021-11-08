import React from 'react';
import { Link } from 'react-router-dom';


function AllBeers (props) {

    return (
        <>
            <h2>Here you can find all the beers</h2>
            {props.allBeers.map((beer)=>{
                return (
                    <div className="AllBeers">
                        <img src={beer.image_url} alt=""/>
                        <h2>Name: {beer.name}</h2>
                        <h3>Tagline: {beer.tagline}</h3>
                        <h3>Contributed by: {beer.contributed_by}</h3>

                        <Link to={`/beers/${beer._id}`}>More Details</Link>

                    </div>
                )

            })}
        </>
    )
}


export default AllBeers