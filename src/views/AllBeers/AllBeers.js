import React from 'react';
import { Link } from 'react-router-dom';
import  "./AllBeer.css"

const AllBeers = ({Beers,title}) => {
    

    return (  
        <div>
           <li><Link to="/">Home</Link></li> 
            <h1>{title}</h1>
            {Beers.map(beer =>(
                <div className="column" key={beer._id}>
                <div className = "card" >
                    <Link to = {`/beers/${beer._id}`}>
                    <img src={beer.image_url} width="70" height="230" />
                    </Link>
                    <h1>{beer.name}</h1>
                    <h3 className="tagline">{beer.tagline}</h3>
                    <p ><b>Create By:</b> {beer.contributed_by}</p>
                </div>
                </div>
            ))}

        </div>
    );
}
 
export default AllBeers;