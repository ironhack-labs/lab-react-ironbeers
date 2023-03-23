import { useState, useEffect } from "react"; 
import axios from "axios";
import Navbar from '../components/Navbar';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(()=> {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response)=>{
            console.log(response.data)
            setRandomBeer(response.data)
        })
        .catch(err=>console.log(err, "in Random"))
    },[])

    return(
        <div>
            <Navbar></Navbar>
            <div key={randomBeer._id}>
                <img src={randomBeer.image_url} alt="random beer" />
                <h3>{randomBeer.name}</h3>
                <p>{randomBeer.tagline}</p>
                <p>First brewed: {randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <span>Created by: {randomBeer.contributed_by}</span>


            </div>
        </div>
    )
}

export default RandomBeer;