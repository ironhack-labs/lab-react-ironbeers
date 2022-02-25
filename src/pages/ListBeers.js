
//ListBeers.js
import axios from 'axios';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from "../components/Header";

function ListBeers() {
const [beers, setBeers] = useState([]);

useEffect(() => { 
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((responseFromApi) => {
        console.log(responseFromApi.data);
        setBeers(responseFromApi.data)
    });
 }, [] ); //this [] means to run the effect only once after the initial render. We could put beers variable or some other state varaible in here to make this bit of code run every time it updated if we wanted


    return (
        <div>
            <Header />

                <div className="BeersList">
            {beers.map(beer => {
                return (
                    <Link to={{pathname: `/beers/${beer._id}`}} style={{ textDecoration: 'none' }}>
                    <div key="_id" className="BeerContainer">
                        <div className="BeerImage">
                            <img src={beer.image_url} alt="beer"/>
                        </div>
                        <div className="BeerDetails">
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p>Contributed by: {beer.contributed_by}</p>
                        </div>                        
                    </div>
                    </Link>
                );
            })}
            </div>


        </div>
    );
}

export default ListBeers;