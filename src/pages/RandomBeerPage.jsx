import { useState, useEffect } from "react";

import axios from "axios";




function RandomBeersPage() {




    const [beerInfo, setBeerInfo] = useState("");   




    useEffect(()=>{

        axios

            .get("https://ih-beers-api2.herokuapp.com/beers/random")

            .then((response)=>{

                setBeerInfo(response.data);

            })

    }, []);




    return(

        <div>

            <img src={beerInfo.image_url}></img>

            <h3>{beerInfo.name}</h3>

            <p>{beerInfo.tagline}</p>

            <p>{beerInfo.first_brewed}</p>

            <p>{beerInfo.attenuation_level}</p>

            <p>{beerInfo.description}</p>

            <p>{beerInfo.contributed_by}</p>

        </div>

    )  

}




export default RandomBeersPage;