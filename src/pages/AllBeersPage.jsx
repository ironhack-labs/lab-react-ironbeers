import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';


function AllBeersPage() {
    const[beers, setBeers] = useState(null)
    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data)
            })

    }, [])
    return (
        <div>
            <h1>all beers</h1>
            {console.log(beers)}
            {beers &&
            beers.map((element)=>{
                return <div className="all-bears" key={element._id}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={element.image_url} className="img-fluid rounded-start" alt="beer picture" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                < Link to={`/beers/${element._id}`}> <h5  className="card-title">{element.name}</h5> </Link> 
                                <p className="card-text">{element.tagline}</p>
                                <p className="card-text"><small className="text-body-secondary">Created by : {element.contributed_by}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }) }
        </div>

    )
}

export default AllBeersPage;
