import { useEffect, useState } from "react";
import Header from "./Header";

import { Link } from "react-router-dom";

function AllBeers() {
    const [beers, setBeers] = useState(null)
    
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(data => setBeers(data))
            .catch(error => console.log(error))
    }, [])

    return(
        <>
            <Header />
            {beers !== null ?
                beers.map(beer => {
                    return(
                        <>
                            <div key={beer._id} className="beer">
                                <div className="beerImageDiv">
                                    <img src={beer.image_url} alt="" />
                                </div>
                                <div className="beerTextDiv">
                                <Link to={`/beer/${beer._id}`}>
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <p><b>Created by: </b>{beer.contributed_by}</p>
                                </Link>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
            }) : <></>}
            
        </>
    )
}

export default AllBeers;