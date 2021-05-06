import React from 'react'
import "./Option.css"

import { Link } from "react-router-dom"

const Option = props => {
    return (
        <Link to={props.url}>
            <div className="option">
                <figure>
                    <img src={props.image} />
                </figure>
                <div className="texts">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link >
    )
}

export default Option