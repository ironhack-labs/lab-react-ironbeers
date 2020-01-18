import React from 'react';
import "./Beer.css"
import { Link } from 'react-router-dom';

export default function Beer(props){
    return (
        <Link to={`/beers/${props.id}`}>
        <div className="box columns is-vcentered is-centered has-margin-top-10 has-margin-bottom-10 has-margin-left-100 has-margin-right-100">
            <div className="column is-2">
                <img src={props.image} alt="" className="image-height"/>  
            </div>
            <div className="column is-5 has-text-left">
                <h1 className="is-size-3 has-text-black">{props.name}</h1>
                <h2 className="is-size-4 has-text-grey-light">{props.tagline}</h2>
                <p className="is-size-7 has-text-black"><b>Created by:</b> {props.contributed_by}</p> 
            </div>
        </div>
        </Link>
    );
}

