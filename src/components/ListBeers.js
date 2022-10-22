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
            {props.beers.map(beer=>{
                return(
                    <div>
                    <img src={beer.image_url} alt="beerlogo"/>
                    <h2>Name:{beer.name}</h2>
                    <h3>Tagline:{beer.tagline}</h3>
                    <h4>Contributed By: {beer.contributed_by}</h4>
<Link to={`/beers/${beer._id}`}> More details </Link>
                    </div>
                )
            })}
        </div>
    )
}