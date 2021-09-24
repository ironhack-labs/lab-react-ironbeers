import React from 'react';
import { Link } from "react-router-dom"

function NewBeer(){

    return (
        <div>
            <Link to="/">Home Page</Link>
            <h2>New Beer</h2>
        </div>
    )
}

export default NewBeer