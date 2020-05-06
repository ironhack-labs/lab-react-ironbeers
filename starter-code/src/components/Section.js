import React from 'react';
import { Link } from "react-router-dom";

export default function Section(props) {
    // console.log(props)
    return (
        <div>
            <Link to={props.to} className="beer-image">
                <div className="section">
                    <img src={props.url} alt={props.name}></img>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </Link>
        </div>
    )
}
