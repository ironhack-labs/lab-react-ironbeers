import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
    <h1>IronBeers Homepage</h1> 
     <Link to='/beers'><h1>All beers</h1></Link>
     <Link to='/random-beer' ><h1>Random beer</h1></Link>
     <Link to='/new-beer' ><h1>New beer</h1></Link>
        </div>
    )
}
