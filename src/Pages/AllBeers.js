import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Components/Header.js"
import { Link } from 'react-router-dom'

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"


const AllBeers = () => {
    const [beers, setBeers] = useState ([]) // beers is the data, set is what the data will be

    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setBeers(res.data)            
        }
        apiCall()
    }, [])
    const oneBeer = beers.map((beer) => { 
        return (
            <div key={beer._id}>
                <ul>
                <Link to={`/beers/${beer._id}`} ><img src={beer.image_url} alt="Beer" /></Link>
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p>Created by: {beer.contributed_by}</p>
                </ul>
            </div>
        )
    })
    return(
        <div>
            <Header></Header>
            <h1>List</h1>
            {oneBeer}     
        </div>
    )
}

export default AllBeers;