import React from 'react';
import { Link } from 'react-router-dom';

import './Beer.css';

 function Beer(props) {

    return (
        <div>
            <ul>
                <li>
                    <div className="container-div">
                        <div className="element-div">
                            <img src={props.image_url} alt={props.name} width="50px"/>
                        </div>
                        <div className="element-div-1">
                            <Link to={`/beers/${props._id}`}><h1>{props.name}</h1></Link>
                            <p>{props.tagline}</p>
                            <p>Contributed by: {props.contributed_by}</p>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
}

export default Beer;