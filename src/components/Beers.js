
import Header from "./Header"

import { Link } from "react-router-dom"

function Beers(props){

    
        
      

    return (
        <div>
        <Header/>
        <br/>
        {props.beers.map((beer) => {
            return (
                <>
                <img className="beer-image" src={beer.image_url} alt="" />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>More Details</Link>
                <br/>
                </> 
            )
        })}
        </div>
        
    )
}

export default Beers