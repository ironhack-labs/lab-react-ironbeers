import React from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


function ListBeers(props) {
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
                                <NavLink to={`/beers/${beer._id}`}>Read more</NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListBeers