import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {
    const [beers, setBeers] = useState([""])

    useEffect(()=>{
        axios.get(beersAPI).then((response)=>{
            setBeers (response.data)
            console.log(beers)
        })
    }, [])  

    return(
        <div style={{textAlign:"center"}}>
            {beers.map((beer)=>{
            return(
                <div key={beer._id} style={{paddingTop:"100px", paddingLeft:"350px", paddingRight:"350px"}}>
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <img src={beer.image_url} alt={beer.name} 
                    style={{width:"50px"}}/>
                    <p>{beer.description}</p>
                    <h2>Brewing Tips</h2>
                    <p>{beer.brewers_tips}</p>
                    <p><i>{beer.contributed_by}</i></p>
                    <Link to={`/beers/${beer._id}`}><p>More info</p></Link>

                </div>
                )
        })}
        </div>

    )



}

export default AllBeersPage;
