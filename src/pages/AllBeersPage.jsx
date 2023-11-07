import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const[beerList, setBeerList] = useState([])

    useEffect (() =>{
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"
    axios.get(apiURL).then((response) => {
    setBeerList(response.data)}
    )
},[])

    const handleChange = (event) => {
        let search = (event.target.value)
        const apiURL = `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
        axios.get(apiURL).then((response) => {
            setBeerList(response.data)}
            )


    }

    return(
        <div>
        <input type="text" placeholder="search" onChange={handleChange}></input>
            {beerList.map((beer)=>{
                return(
                    <Link  key={beer._id} to={`/beers/${beer._id}`}>
                    <div style={{display: "Flex", flexDirection: "Row", marginBottom: "50px"}}>
                        <img style={{width: "75px", marginRight: "50px"}} src={beer.image_url}/>
                        <div>
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by/* .slice(0,(beer.contributed_by.indexOf("<"))) */}</p>
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllBeersPage;