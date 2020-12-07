import React from 'react'
import { Link } from 'react-router-dom';
import Beer from "./Beer"


const Beers = (props) => {

// console.log("beers page ", props.beers)
/*in here we use the ternary operator, the condition is the props.beers
if the condition is met then then we map over them and return a link to the beer
where we display the information for a beer, then we display this info for 
each beer we map over. if the condition is not met then we return null.*/

    return (
        <div>
            <Link to="/">Home</Link>
            <ul>
                {props.beers ? props.beers.map((beer) => {
                    return < Beer key={beer._id}  beer={beer}/>
                }) : null}
            </ul>
        </div>
    )
}


export default Beers
