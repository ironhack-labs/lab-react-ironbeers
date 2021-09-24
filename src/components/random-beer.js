import React from 'react';
import { Link } from "react-router-dom"

function RandomBeer(){
    return(
        <div>
            <Link to="/">Home Page</Link>
            <h2>Random Beer</h2>
        </div>
    )
}

export default RandomBeer