import axios from "axios"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"



function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data)
        })
    }, []);
        
    return ( 
        <div>
            <h1>All beers:</h1>
            {beers.map(beer => {
                return (
                <div key={beer._id} className="Beers">
                    <img src={beer.image_url} alt="beer" />
                    <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                    <p>{beer.tagline}</p>
                    <h5>Created by: {beer.contributed_by}</h5>
                </div>

            )
            })}
        </div>
        
     );
}

export default Beers;