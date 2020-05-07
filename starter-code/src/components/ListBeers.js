import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListBeers.css';


const ListBeers = ({ beers }) => {

    const getBeers = () => {
        return beers.map((beer, idx) => (
            <>
                <div key={idx} className="card1">
                    <div className="card_image">
                        <Link to={`/beers/${beer._id}`}><img id="home" src={beer.image_url} style={{ width: "50px", height: "150px" }} alt="Beer" /></Link>
                    </div>
                    <div className="card_inf">
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p> <strong>Created by: </strong> {beer.contributed_by}</p>
                    </div>
                </div>
                <hr />
            </>
        ))
    }

    return (
        <>
            <div >
                {getBeers()}
            </div>

        </>
    );
}

export default ListBeers;