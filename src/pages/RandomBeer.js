import {Link} from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react";



function RandomBeer(){
    const [randombeer, setRandomBeer] = useState ({})
    
        useEffect(() =>{
            axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log("randombeer: ", response.data);
                setRandomBeer(response.data)
        });
        }, []);
    



    return(
<div>
<Link to="/"><button>Home</button></Link>  
</div>
 )
}
export default RandomBeer