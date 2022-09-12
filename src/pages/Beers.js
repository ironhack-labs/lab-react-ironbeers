import {NavLink} from "react-router-dom"
import { useState,useEffect } from "react"
import axios from 'axios'

export default function Beers() {
     const [beers,setBeers]=useState([])

     useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response)=>{
            setBeers(response.data)
        })
        .catch(err=>console.log('error getting beers list',err))
     },[])

    return(
        <div className="Beers">
            <NavLink to="/"><img src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} alt="home"/></NavLink>
            {beers.map((beer)=>{
                return (
                    <div class="beerCard">
                        <NavLink to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer"/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p><b>Created By :</b>{beer.contributed_by}</p>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}