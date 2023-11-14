import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response.data)
                setBeers(response.data)
            })
            .catch((error) => {
                console.log("error", error)
            })
    }, [])

    return(
        <div className="AllBeersPage" >
            {beers.map((beer) => {
            return (
                <div key={beer.id} className="divBeerPage"> 
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url}/>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>
                </div> 
                
            )
            })}
        </div>
    )

}

export default AllBeersPage;
