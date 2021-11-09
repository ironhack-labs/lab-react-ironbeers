import React from 'react';
import { Link } from "react-router-dom";



function BeersList (props){
        
        return (
            <>
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    {props.beers.map((elm) => {
                            return (
                                <>
                                    <Link to={`/beers/${elm._id}`}/>
                                    <img src={elm.image_url} height="300px"/>
                                    <h3>{elm.name}</h3>
                                    <h4>{elm.tagline}</h4>
                                    <p>{elm.contributed_by}</p>
                                    <hr/>
                                </>
                            )
                     })}
                </div>

            </>
        )
}

export default BeersList 