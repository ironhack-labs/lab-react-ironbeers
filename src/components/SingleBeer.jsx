import React from 'react'

const SingleBeer = (props) => {
    console.log("props", props)
    return (
        <div>
           
                <img src={props.beer.image_url} alt={props.beer.name}/>
                <p>{props.beer.name}</p>
                <p>{props.beer.attenuation_level}</p>
                <p>{props.beer.tagline}</p>
                <p>{props.beer.first_brewed}</p>
                <p>{props.beer.description}</p>
                <p>{props.beer.contributed_by}</p>

                    
        </div>
    )
}

export default SingleBeer;
