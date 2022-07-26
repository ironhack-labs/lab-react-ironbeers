import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function HomePage() {
return(
    <div className="heading">
<h1> Kristen's 🍺 IronBeers</h1>
<img src='./public/images/bottle-cap.png' alt="" />
<img src="./public/images/beer.png" alt="" />
<img src="./public/images/glass.png" alt="" />



<div className="headingLinks">
<Link to="/beers">Examine our Wares
 (that is, our beers)</Link>

 


<Link to="/random-beer">Beer-of-the-Minute (random beer)</Link>


<Link to="/new-beer">Feeling Generous? (Contribute a beer to our database) </Link>


</div>
</div>
)

}

export default HomePage;