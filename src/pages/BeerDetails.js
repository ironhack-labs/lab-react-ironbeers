import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function BeerDetails() {
    const {beerId} = useParams()
    const [beer,setBeer]=useState({image_url:""})
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{
            console.log('response.data:',response.data)
            setBeer(response.data)})
        .catch((err)=>console.log('error getting beerDetails', err))
    },[beerId])

    return (
        <div className="BeerDetails">
            <NavLink to="/"><img src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} alt="home" /></NavLink>
            
            <img src={beer.image_url} alt="beer"/>
            <div >
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                </div>
                <div>
                    <p className="attenuation">{beer.attenuation_level}</p>
                    <p className="firstBrewed">{beer.first_brewed}</p>
                </div>
                
            </div>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}