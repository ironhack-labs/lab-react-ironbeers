import { Link } from "react-router-dom"
import React from "react"
export default function BeerCard({ image_url, name, tagline, fist_brewed, attenuation_level, description, contributed_by }) {
    return (
        <Link classNameName="BeerCard"
            to={`/beers/${name}`}>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image_url} className="img-fluid rounded-start" alt="beer bottle" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{tagline}</p>
                            <p className="card-text"><small className="text-muted">Created by: {name}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
           
       
    )
}