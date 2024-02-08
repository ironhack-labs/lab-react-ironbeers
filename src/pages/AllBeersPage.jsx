import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beersArray) => {
            setBeers(beersArray.data)
            console.log(beersArray)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="beers-list">
            {beers.map((oneBeer) => {
                return (
                    <div className="one-beer" key={oneBeer._id}>
                        <img src={oneBeer.image_url} alt="" className="beer-img"/>
                        
                        <div className="beer-details">
                            <Link to={`/beers/${oneBeer._id}`}><h1>{oneBeer.name}</h1></Link>
                            <p>{oneBeer.tagline}</p>
                            <p><strong>Created by:</strong> {oneBeer.contributed_by}</p>
                        </div>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
