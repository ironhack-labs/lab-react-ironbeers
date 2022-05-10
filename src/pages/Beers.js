import { Link } from "react-router-dom";
import Header from "../components/Header";

import { useState, useEffect } from "react";
import axios from "axios";

function Beers() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log('response.data', response.data);
                setBeers(response.data)
            })
    }, [] );
    // this will display a list of all the beers
    // Link to the homepage in the header 
    return (
        <div>
            <Header />
            <h1>All The Beers!</h1>

            {beers.map((beer) => (
                <div key={beer._id} style={{ display: 'flex', borderBottom: '1px solid #68D5FF'}}> 
                    <img src={beer.image_url} alt='beer' style={{ height: '150px'}}/>
                    <div style={{ flexDirection: 'column' }}>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>See this beer's details</Link>
                    </div>
                </div>
            ))}
            {/* Need to display a list of all beers */}
            {/* display: image, name, tagline, contributed_by*/}
            {/* add a link to each beer to check details. 
            Link goes to /beers/:beerId */}

        </div>
    )
}

export default Beers;