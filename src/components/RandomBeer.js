import React from 'react';
import { Link } from 'react-router-dom';

export default function RandomBeer() {
    return (
        <div>
            <Link to="/">
                <img src="../assets/header.png" width="300px" alt="header banner" />
            </Link>
        </div>
    )
}
