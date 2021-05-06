import React from "react"
import "./BeerBox.css"
import { Link } from "react-router-dom"

const BeerBox = props => {
    return (
        <Link to={`/beers/${props._id}`}>
            <article className="beerBox">
                <figure>
                    <img src={props.image_url} />
                </figure>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.tagline}</h3>
                    <p><strong>Created by:</strong> {props.contributed_by}</p>
                </div>
            </article>
        </Link>
    )
}

export default BeerBox