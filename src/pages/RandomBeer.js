import Header from "../components/Header";
import React, {useState, useEffect} from "react";
import axios from "axios";

function RandomBeer(){
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(res=>setRandomBeer(res.data))
        .catch(err=>console.log(err))
    }, [])

    return(
        
        <>
       
        <Header />
        
        <h2>Random Beer</h2>
        <div className="card">
            <div style={{height: "90vh", width: "90vh"}} className="d-flex justify-content-center align-items-center">
                <img src={randomBeer["image_url"]} alt={randomBeer.name} className="card-image-top h-75"/>
            </div>
            
            <div className="card-body">
                <div className="card-title d-flex flex-row justify-content-between">
                    <h2>{randomBeer.name}</h2>
                    <h3>{randomBeer["attenuation_level"]}</h3>
                </div>
                <div className="card-title d-flex flex-row justify-content-between">
                    <h4>{randomBeer.tagline}</h4>
                    <h6>{randomBeer["first_brewed"]}</h6>
                </div>
                <div>
                    <p>{randomBeer.description}</p>
                    <small>{randomBeer["contributed_by"]}</small>
                </div>
            </div>
        </div>
        </>
    )
}

export default RandomBeer;