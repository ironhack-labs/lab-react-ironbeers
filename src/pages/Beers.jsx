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
                            <h1>{oneBeer.name}</h1>
                            <h5>{oneBeer.tagline}</h5>
                            <p>Created by: {oneBeer.contributed_by}</p>
                            <Link to={`${oneBeer._id}`}>More Details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Beers;