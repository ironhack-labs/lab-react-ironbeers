import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom'


function Beer() {
    const [beer, setBeer] = useState([])
    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beerData) =>{
            setBeer(beerData.data)
        })
    },[])
    
    return(
        <div>
           <Navbar></Navbar>
            {beer.map((beers) => {
                
                return(
                 
                 
                <div key={beers._id}>
                   
                   <NavLink
                    to={`/beers/${beers._id}`} >
                        <img src={beers.image_url} alt="beerImg" className="imgBeers" />
                        {/* </Link> */}
                        <h3>{beers.name}</h3>
                    </NavLink>
                        <p>{beers.tagline}</p>
                        <span>Created by: {beers.contributed_by}</span>
                        
                      
                </div>
                )
            })}

        </div>
    )
}

export default Beer;