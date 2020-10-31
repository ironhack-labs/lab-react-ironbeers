import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

export default function Beers(props) {
    // console.log(props.beers)
    return (
        <div>
            <NavBar />
            <input type="text" placeholder="Search beer" onChange={props.onSearch}></input>
            <div className="d-flex flex-column justify-content-between">
                {props.beers.map((beer) => {
                    return (
                        <div className="d-flex flex-row mx-auto" key={beer._id}>
                            <img style={{height: "200px"}} src={beer.image_url} alt=""></img>
                            <div>
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                                <Link to={`/beers/${beer._id}`}>Read more</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
