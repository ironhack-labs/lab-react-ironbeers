import React from "react";
import { Link } from "react-router-dom";

const Beer = ({beer}) => {
    return(
        <>   
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} className="img-fluid rounded-start" alt={beer.name}/>
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{beer.name}</h5>
                            <p className="card-text">{beer.tagline}</p>
                            <p className="card-text"><small className="text-muted">Created by {beer.contributed_by}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Beer