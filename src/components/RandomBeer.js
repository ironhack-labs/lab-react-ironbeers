import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function RandomBeer() {

    const [randomBeer, setRandomBeer]= useState(null)

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response =>{
            setRandomBeer(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const renderRandomBeer= ()=>{
        return(
            <section>
                <img src={randomBeer.image_url} alt={randomBeer.name}/>
                <h3>{randomBeer.name}</h3>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
                <Link to={`/`}> Home</Link>
            </section>
        )
    }
  return (
    <>
      <header>
        <Link to={"/"}> Home</Link>
      </header>
      
        {randomBeer 
        ? renderRandomBeer()
        : <h2>Loading...</h2>
        }
    
    </>
  );
}

export default RandomBeer