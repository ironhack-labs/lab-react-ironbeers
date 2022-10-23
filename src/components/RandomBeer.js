import axios from "axios";
import {useEffect, useState} from "react"


function RandomBeer(){

const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response)=>{
            setRandomBeer(response.data);
            })
        .catch(error =>{
            console.log("error getting random beer from api", error)
        })
    }, [])

console.log(randomBeer)

    return(
        <>
            <header>
                <a href="/">Home</a>
            </header>
 
                 <div className="" style={{maxWidth:"540px"}}>
                <div className="">
                    <div className="">
                        <img style={{maxHeight:"250px"}} src={randomBeer.image_url} className="" alt="..."/>
                    </div>

                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">Name: {randomBeer.name}</h5>
                            <p className="card-text">{randomBeer.tagline}</p>
                            <p className="card-text">{randomBeer.first_brewed}</p>
                            <p className="card-text">{randomBeer.attenuation_level}</p>
                            <p className="card-text">{randomBeer.description}</p>
                            <p className="card-text"><small className="text-muted">{randomBeer.contributed_by}</small></p> 
                        </div>
                    </div>

                </div>
                            
                </div>      
        </>
      )
    }

export default RandomBeer;