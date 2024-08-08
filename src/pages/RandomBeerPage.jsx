import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeerPage() {
  
    const [beer, setBeer] = useState(null);
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((oneBeer)=>{
            setBeer(oneBeer.data)
            
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    

    
  return (
    <div className="oneBeer">
            {beer && (
                <div className="beer">
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} alt="" />
                    <p>{beer.description}</p>
                </div>
            )}

    </div>
  )
}

export default RandomBeerPage