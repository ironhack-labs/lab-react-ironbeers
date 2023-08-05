import { useState, useEffect } from "react";
import Header from "../components/Header.js";
import axios from 'axios'
import { Link } from "react-router-dom";

const ListBeers = () => {

    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        async function fetchBeers(){
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(response.data)
                console.log(response.data)
                setIsLoading(true);
            } catch (error) {
                console.log(error)
            }
        }
        fetchBeers()
    }, [])

    if(beers.length === 0 && isLoading === false){
        return <p>Loading beers...</p>
      }

    return (
            <>
                            <Header />

                            {beers.length === 0 ? 
        <p>No apartment found</p>:
        ( 
           <>
            {beers.map(beer => {
                return <>
                <img src={beer.image_url} width="50px" />
                <h3>{beer.name}</h3> 
                <h4>{beer.tagline}</h4> 
                <p>Created by: {beer.contributed_by}</p> 
                <Link to="/beers/:beerId" >Details</Link>
                </>
            })}
           
           </>
   
    )
}

    </>
    )
}

export default ListBeers;