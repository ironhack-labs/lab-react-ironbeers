import React from 'react'
import {Link, useParams} from "react-router-dom"


/* to display a single beer first we need to find the beer that has been 
clicked on, we take the current beer id from the  */


const SingleBeer = (props) => {

    /*finding the current beer id so we can find the match from the list of 
    all beers, then we can get all the extra info to display */
    let beerId = props.match.params.beerId

    // console.log("the props single beer",props.match.params.beerId)
    
    if (!props.beers) {
        return null
    }
    /*here we set beer from the listing to be equal to the beer we
    just clicked on by finding a beer with the exact same id */
    const beer = props.beers.find((beer) => {
        
        return beer._id === beerId
    })
    // console.log(beer._id)
    // console.log(beerId)
    // console.log("single beer",beer)

/*now that we have the exact same beer we can display all the information 
 for that individual beer*/
    return (
        <div> <Link to="/">Home</Link>  
        <div>
         
     <img src={beer.image_url} alt=""/>
    <h2>{beer.name}</h2>
    <h3>{beer.tagline}</h3>
    <h4>{beer.first_brewed}</h4>
    <h4>{beer.attenuation_level}</h4>
    <h4>{beer.description}</h4>
    <h4>{beer.contributed_by}</h4>

        </div>
        </div>
    )
}

export default SingleBeer
