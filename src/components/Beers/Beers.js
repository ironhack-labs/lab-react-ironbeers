import React from 'react'

import { Link } from 'react-router-dom'

import Header from './../Header/Header'

function Beers(props) {
    //const { beersData } = props;
    //console.log('bububu', beersData);
    // if (!Array.isArray(beersData)) 
    //     console.log('results are not array');

    return (
        <div>

            <Header />
            <div className="container">
                {props.beersData.map(( { _id, image_url, name, tagline, contributed_by } ) => {
                    return(
                        <article className="beerListDisplay">
                            <Link key={ _id } to={`/beers/${_id}`}>
                            <img id="beersImg" src={ image_url } alt="beerImage" />
                            <div className="beerText">
                                <h4>{ name }</h4>
                                <p>{ tagline }</p>
                                <p>Created by: { contributed_by }</p>
                            </div>
                            </Link>
                        </article>
                    );
                }) }
            </div>

        </div>
    )
}

export default Beers;