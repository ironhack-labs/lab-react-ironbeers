import {Link} from "react"
import { useState, useEffect } from "react";
import axios from "axios"


function SingleBeer(){
    const [singlebeer, setSingleBeer] = useState ({})

    useEffect(() =>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log("singlebeer: ", response.data);
            setSingleBeer(response.data)
    });
    }, []);






    return(
        <div>
       <div>
        <Link to="/"><button>Home</button></Link>
        </div>

        <h3>Detailview</h3>
        {singlebeer.map((singlebeer) => (
        <div key={singlebeer._id} className="card-detail">
          <img src={singlebeer.img} alt="singlebeer" />
          <p>{singlebeer.name}</p>
          <p>{singlebeer.tagline}</p>
          <p>{singlebeer.first_brewed}</p>
          <p>{singlebeer.attenuation_level}</p>
          <p>{singlebeer.description}</p>
          <p>{singlebeer.contributed_by}</p>
          </div>
        ))}
 </div>
 );
 };
export default SingleBeer;