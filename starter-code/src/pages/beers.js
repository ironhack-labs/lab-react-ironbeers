import React from 'react';
import {Link, Route} from 'react-router-dom';
import ironBeers from "../newbeers.json";
import "./allBeers.css"

function Beer() {
    return (
        <div className="beer-wiki">
            {ironBeers.map((beers)=> 
            <div class="individualBeer">
                {/* <Link to={`/beers/beers-detail/${beers.name}`}> */}
                <div className="individualImg">
                    <img className="imgBeer" src={beers.image_url} alt=""/>
                </div>
                <div className="individualInformation">
                    <h1>{beers.name}</h1>
                     <h3>{beers.tagline}</h3>
                     <p>Created by: {beers.contributed_by}</p>
                </div>
                 {/* </Link> */}
            </div>
            )}  
                {/* <div className="detail-container">
                    <Route path="/beers-wiki/beers-detail/:name" component={ironBeers}/>
                </div> */}
        </div>
    )
}


export default Beer;

