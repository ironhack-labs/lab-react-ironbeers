import React from 'react'

import {Link} from "react-router-dom"

function Beers(props) {

    let {beers, btnSearch} = props

    return (
        <div>
        <h6>Search</h6>
        <input onChange={btnSearch} type="text"></input>
            {
                beers.map((elem)=> {
                    return (
                        <div className="beerList" >
                            <div className="beerimg">
                                <img src={elem.image_url} alt="beerImg" height="300px"></img>
                            </div>
                            <div className="beerInfo">                            
                                <h1><Link to={`/beers/${elem._id}`}>{elem.name}</Link></h1>
                                <h3>{elem.tagline}</h3>
                                <h6><strong>Created by: </strong>{elem.contributed_by}</h6>
                            </div>
                            <hr/>
                        </div>
                        
                    )
                })
                
                }
        </div>
    )
}

export default Beers
