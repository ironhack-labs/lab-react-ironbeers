import React from "react"

const Beer =(props)=>{
    return (
    <>
        <img src={props.beer.image_url} alt={props.beer.name}/>
        <h2>{props.beer.name}</h2>
        <p>{props.beer.tagline}</p>
        <p>{props.beer.contributed_by}</p>
    </>
    )
} 

export default Beer