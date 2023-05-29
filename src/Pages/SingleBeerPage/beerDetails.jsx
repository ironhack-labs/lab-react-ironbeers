import {useParams, Link} from "react-router-dom"
import { useState,useEffect } from "react"


function SingleBeer(props) {
  
    let [beer,setBeer]= useState("");
    let {beerId}=useParams();
    let {beers}=props;

    useEffect(()=>{
        let foundBeer=beers.find((oneBeer)=>{
            return oneBeer._id===beerId
        })

        setBeer(foundBeer);

    },[projects])

return (
    <div>
    {beer && (
       <div>
            <img src={beer.image_url}/>
            <h1>{beer.name}</h1>
            <h1>{beer.tagline}</h1>
            <p>{description}</p>
            <h4>{first_brewed}</h4>
            <h4>{brewers_tips}</h4>
            <h4>{attenuation_level}</h4>
            <h4>Created by:{beer.contributed_by}</h4>

            <Link to="/beers">Back</Link>
        </div>
    )}
   </div>

  )
}

export default SingleBeer