import {NavLink} from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function RandomBeer() {
    const [randomBeer,setRandomBeer] = useState()

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response)=>{
            console.log("response:",response)
            setRandomBeer(response.data)
        })
        .catch(err=>console.log('error getting random beer',err))
    },[randomBeer])

    return(
        <div className="RandomBeer">
            <NavLink to="/"><img src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} alt="home"/></NavLink>
            <img src={randomBeer.image_url} alt="beer"/>
            <div >
                <div>
                    <h2>{randomBeer.name}</h2>
                    <h3>{randomBeer.tagline}</h3>
                </div>
                <div>
                    <p className="attenuation">{randomBeer.attenuation_level}</p>
                    <p className="firstBrewed">{randomBeer.first_brewed}</p>
                </div>
                
            </div>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}