import "./Beers.css"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function Homepage(props){
    const[beers, setBeers] = useState(null)

useEffect(()=>{
    (beers===null? props.getBeers("/") : console.log("already called"))
    setBeers((prevBeers)=>{
        return props.beersArr
    })
 
},[props])


console.log(beers)
return(
<>

    {beers===null? 
    <h3>Loading...</h3> :
    <div className="beer-list">
    {beers.map((beer)=>{
       return (
           <>
           <div className="list-element">
           <img src={beer.image_url}/>
           <div className="list-text">
           <h2>{beer.name}</h2>
           <h5>{beer.tagline}</h5>
            <p>Created by:{beer.contributed_by}</p>
            <NavLink to={`/beers/${beer._id}`} className="link">Details</NavLink>
            </div>
           </div>
           
           
           </>
           )

    }) }
    </div>
    } 
    
</>
)

}

export default Homepage;