import React from 'react'
import { Link } from "react-router-dom";

export default function BeerRow({
    url,
    name,
    tagline,
    contributed_by,
    id,
}) {
    return (
        <React.Fragment>
            <td><img className="beerPicture" src={url} alt="beer" /></td>
            <td>{name}</td>
            <td>{tagline}</td>
            <td>{contributed_by}</td>
            <td><Link to={`/beers/${id}`}>see more</Link></td>
        </React.Fragment>
    )
}
