const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../App.css";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    /* UseEffect with an empty array will creade side-effects when the component is rendered initially */
    useEffect(() => {
      axios.get(`${API_URL}`).then((response)=>{
        setBeers(response.data);
        console.log(beers)
      })
      .catch(error=>console.log(error))
    }, [])

    return(
        <div>
            {beers.map(beer=>{
                return(
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <div>
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                            <img src={beer.image_url}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
