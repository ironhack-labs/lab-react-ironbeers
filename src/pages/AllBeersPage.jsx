import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const API_URL="https://ih-beers-api2.herokuapp.com/beers"



function AllBeersPage() {

    const[ beers, setBeers ]= useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}`).then((response)=>{
            setBeers(response.data)
        })
        .catch((error)=> console.log(error))

    },[])

    return(
        <div>
            <ul>
                {beers.map((beer)=>{
                    return( <li key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} style={{ width: '60px', height: 'auto' }}/>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>Contributed By:{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Details</Link>
                    </li>)
                    
                })}
            </ul>

        </div>
    )
}

export default AllBeersPage;
