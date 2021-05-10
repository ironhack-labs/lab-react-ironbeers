import React from 'react'
import { Link } from "react-router-dom"

export default function Beer({name, tagline, description, image_url, contributed_by, _id}) {
    return (
      <div>
        <img src={image_url} alt="" />
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>{description}</p>
            <p>{contributed_by}</p>
            <Link to={`/beers/${_id}`} key={_id}>Beer details</Link>
      </div>
    );
}
