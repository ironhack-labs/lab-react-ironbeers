import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from "./NavBar"

export default function SingleBeer(props){

    const [beerState, setBeerState] = useState({})
    const {beerId}= props.match.params

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res => {
            let newBeer = res.data.filter((beer) => beer._id === beerId)
            setBeerState(newBeer[0])
        }))
        .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <NavBar />
            <div>
                <img src ={beerState.image_url} alt="beer"/>
                <h1>{beerState.name}</h1>
                <h2>{beerState.tagline}</h2>
                <h3>{beerState.first_brewed}</h3>
                <h4>{beerState.attenuation_level}</h4>
                <p>{beerState.description}</p>
                <p>{beerState.contributed_by}</p>
            </div>
        </div>
    )
}