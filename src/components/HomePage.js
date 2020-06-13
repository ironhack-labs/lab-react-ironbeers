import React from 'react';
import { Link } from 'react-router-dom'


function HomePage () {
return (
    <div>
<h1>HomePage</h1>
<Link to={"/beers"}>All Beers</Link>
<Link to={"/random-beer"}>Random Beer</Link>
<Link to={"/new-beer"}>New Beer</Link>
</div>
)
}

export default HomePage