import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Beers(props) {
        return(
            <nav>
                <div className="container from-navbar">
                    <ul className="list-unstyled">
                        {props.beers.map((beer, i) => {
                            return(
                                <div key={i}>
                                    <li className="media m-4" key={beer._id}>
                                        <img
                                            className="img-fluid"
                                            src={beer.image_url}
                                            alt={beer.name}
                                        ></img>
                                        <div className="media-body align-self-center">
                                            <h2 className="h3">{beer.name}</h2>
                                            <p>{beer.tagline}</p>
                                            <p>Contributed by: {beer.contributed_by}</p>
                                            <NavLink to={`/beer/${beer._id}`}>Check this Beer!</NavLink>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
