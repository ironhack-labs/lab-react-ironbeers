import React       from "react";
import { Link }    from "react-router-dom";

function AllBeersPage({ beers }) {
    return (
        <div>
            <h3>List of beers</h3>
            { beers.map((beer) => (
                <div key= { beer._id } className="row">
                    <div className="col-sm-6">
                        <Link to={ `/beers/${ beer._id }` }>
                            <img src={ beer.image_url } alt={ beer.name } />
                        </Link>
                    </div>
                    <div className="col-sm-6">
                        <Link to={ `/beers/${ beer._id }` }>
                            <h4>{ beer.name }</h4>
                        </Link>
                        <p>{ beer.tagline }</p>
                        <p>Created by: { beer.name } </p>
                    </div>
                </div>
            )) };
        </div>
    ) 
}

export default AllBeersPage;