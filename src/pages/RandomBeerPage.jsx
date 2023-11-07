const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function RandomBeersPage() {
    const [random, setRandom] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/random`).then((response)=>{
            setRandom(response.data);
          console.log(random)
        })
        .catch(error=>console.log(error))
      }, [])
  
      return(
        <div>
        <div>
            <p>{random.name}</p>
            <p>{random.tagline}</p>
            <p>{random.contributed_by}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
        </div>
        <img src={random.image_url}/>
        </div>
      )
            
}


export default RandomBeersPage;
