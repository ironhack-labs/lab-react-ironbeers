import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const imgURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

function BeersPage() {
const [beers, setBeers] = useState([])

useEffect(() => {
axios.get("https://ih-beers-api2.herokuapp.com/beers")
.then (response => {
console.log(response.data)
setBeers(response.data)
})
},[])

    return ( 
       <div>
        <header>
        <Link to="/"> <img src={imgURL} alt="header" style={{width: "100vw"}} /></Link>
       </header>
       {beers.map(beer => {
        return (         
         <div key={beer._id} className="beer">
          <img src={beer.image_url} alt="" style={{height: "10vh"}}/>
          <div className="beer-description">
          <h3><Link to={`/beers/${beer._id}`} >{beer.name}</Link></h3>
          <p>{beer.tagline}</p>
          <h6>{beer.contributed_by}</h6>
          <hr style={{width: "100vw"}} />
          </div>
      </div>
        )
       })}
       </div>
     );
}

export default BeersPage;