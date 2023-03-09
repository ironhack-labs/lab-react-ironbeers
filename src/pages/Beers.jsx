import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((result) => {
                console.log(result.data)
                setBeers(result.data)
            })
    }, [])
    return (
        <div className="all-beers">
            {beers.map((oneBeer) => {
                return (
                    <div key={oneBeer._id} className="one-beer">
                        <div className="beer-icon">
                            <img src={oneBeer.image_url} alt="" className="beer-image" />
                        </div>
                        <div className="information-beer">
                            <h3>{oneBeer.name}</h3>
                            <h5><h3>{oneBeer.tagline}</h3></h5>
                            <p>Created by: {oneBeer.contributed_by}</p>
                            <Link to={`beers/${oneBeer._id}`}>More Details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Beers;