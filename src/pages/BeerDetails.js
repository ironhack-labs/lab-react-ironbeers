import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function BeerDetails(props) {
    const [beer,setBeer]=useState({image_url:""})
    const {beerId} = useParams()

    useEffect(()=>{
        if (props.request === "detail"){ // Page de detail de bierre
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response)=>{
                console.log('response.data:',response.data)
                setBeer(response.data)})
            .catch((err)=>console.log('error getting beerDetails', err))

        }else if (props.request === "random"){ //Page de bierre random
            axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response)=>{
                console.log("response:",response)
                setBeer(response.data)
            })
            .catch(err=>console.log('error getting random beer',err))
        }
    },[beerId, props.request])

    return (
        <div className="beerDetails">
            <NavLink to="/"><img className="returnToHome" src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} alt="home" /></NavLink>
            
            <img className="beerImage" src={beer.image_url} alt="beer"/>
            <div className="beerGrid">
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                </div>
                <div>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.first_brewed}</p>
                </div> 
            </div>
            <p class="beerDescription">{beer.description}</p>
            <p class="beerAuthor">{beer.contributed_by}</p>
        </div>
    )
}