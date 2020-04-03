import React from "react";
import {Link} from 'react-router-dom';

export default function NewBeer() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>New Beer</h1>
        </div>
    )
}