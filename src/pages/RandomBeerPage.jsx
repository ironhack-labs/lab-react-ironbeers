import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
const [random, setRandom] = useState(null)

const getRandomBeer = async () =>{
    try {
        console.log('here')
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        /* const randomIndex = Math.floor(Math.random() * response.data.length);
        const responseArray = response.data */
        setRandom(response.data)
    } catch (error) {
        console.log('error finding random', error)
    }

}

useEffect(()=>{
    getRandomBeer()
},[])

return(
    <div>
    {random && (
        <>

        <img src={random.image_url} />
        <h1>{random.name}</h1>
        <p>{random.tagline}</p>
        <p>{random.first_brewed}</p>
        <p>{random.attenuation_level}</p>
        <p>{random.description}</p>
        <h5>{random.contributed_by}</h5>
        </>
    )}



        
    </div>
)


}

export default RandomBeersPage;
