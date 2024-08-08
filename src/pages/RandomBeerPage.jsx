import axios from "axios";
import { useState, useEffect} from "react";


function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((beer)=>{
            console.log(beer.data)
            setRandomBeer(beer.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    return(
        <div className="be_Det_PageDiv">
            <img className="beerPicture" src={randomBeer?.image_url} alt="" />
            
            <div className="spaceBet">
                <h1 className="beerName">{randomBeer?.name}</h1>
                <h2 className="attenuation">{randomBeer?.attenuation_level}</h2>
            </div>
            <div className="spaceBet">
                <h1 className="beerName">{randomBeer?.tagline}</h1>
                <h2 className="attenuation">{randomBeer?.first_brewed}</h2>
            </div>
            
            <p>{randomBeer?.description}</p>
            <p>{randomBeer?.contributed_by}</p>
        </div>
    )


}

export default RandomBeersPage;
