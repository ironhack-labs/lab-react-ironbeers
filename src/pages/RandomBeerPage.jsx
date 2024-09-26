import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState("")
    useEffect((beer) => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(res => {
                setRandomBeer(res.data)
            })

    },[]);
    if(randomBeer === ""){
        return (
            <div className="text-center align-items-center">Loading.......</div>
        )
    } else {

        return(
            <div className="card align-items-center">
                <div className="row align-items-center justify-content-center g-0">
                    <div className="col-md-1">
                        <img src={randomBeer.image_url} alt="" className=" img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 ms-3">
                        <div className="card-body row">
                            <div className="col-md-6">
                                <h2>{randomBeer.name}</h2>
                            </div>
                            <div className="col-md-2" style={{ color: "grey" }}>
                                <h2>{randomBeer.attenuation_level}</h2>
                            </div>
                            <div className="col-md-6">
                                <h6>{randomBeer.tagline}</h6>
                            </div>
                            <div className="col-md-2" style={{ color: "grey" }}>
                                <h5>{randomBeer.first_brewed}</h5>
                            </div>
                        </div>
                        <p className="col-md-4">{randomBeer.description}</p>
                        <h5>{randomBeer.contributed_by}</h5>
                    </div>
                </div>
            </div>
        )

    }
   
}

export default RandomBeersPage;
