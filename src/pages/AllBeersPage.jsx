import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {

    const [beers, setBeers] = useState([""]);

    useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            setBeers(response.data);
        })
        .catch((error)=>console.log(error));
    }, [])

    return(
        <div>
            {beers.map((beer)=> 
            {
                return(
                    <div key={beer._id}>
                        <Link to={`/beers/:beerId`}>
                            <img src={beer.image_url} />
                            <div>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                        </Link>
                        <br />
                    </div>
                )
            })

            }

        </div>

    )
}

export default AllBeersPage;
