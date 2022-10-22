import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function ListBeers(props){

useEffect(()=>{
    props.callbackToGetBeers()
},[])

    return(
        <div>
            <Header/>
            <h1>All of our Beers:</h1>
            <p>{props.beers.name}</p>
            {props.beers.map(beer=>{
                return(
                    <div>
                    <img src={beer.image_url} alt="beerlogo"/>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <h4>{beer.contributed_by}</h4>
<Link to="/beers/:beerId"> More details </Link>
                    </div>
                )
            })}
        </div>
    )
}