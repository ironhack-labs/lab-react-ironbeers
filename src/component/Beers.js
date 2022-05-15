import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function Beers() {

const [beers, setBeers] = useState([]);

useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then( response => {
        setBeers(response.data)  
    })
    .catch(err => console.log('Error getting data from API', err))
    }, [])

 return (
       
        <div >
            <Header/>
            {beers.map(e => (
                <div>
                     <img src={e.image_url} alt='beer'/>
                        <NavLink key={e._id} to={`/beers/${e._id}`}>
                            <h1>{e.name}</h1>
                                </NavLink>
                            <p>{e.tagline}</p>
                        <h6>Created by: {e.name}</h6>
                     <hr/>
                </div>
            ))}
        </div>
    )
}

export default Beers;