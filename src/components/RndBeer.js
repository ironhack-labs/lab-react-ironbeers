import axios from "axios"
import { useEffect, useState } from "react"

const RandomBeer = () => {

    const [rndBeer, setRndBeer] = useState()
    useEffect(() => {
        fetchRandomBeer()
    },[])
    
    const fetchRandomBeer = () => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/random")
        .then((res) => {
            setRndBeer(res.data)
        })
        .catch((e) => console.log(e))
    }
    console.log(rndBeer)


    return(
        <>
        {rndBeer ?<div>
            <h2>{rndBeer.name}</h2>
            <img src={rndBeer.image_url} alt={rndBeer.name}/>
            <p>{rndBeer.tagline}</p>
            <p>{rndBeer.first_brewed}</p>
            <p>{rndBeer.attenuation_level}</p>
            <p>{rndBeer.description}</p>
            <p>{rndBeer.contributed_by}</p>
        </div>
        : <p>loading</p>
    }
       </>
    )
}

export default RandomBeer