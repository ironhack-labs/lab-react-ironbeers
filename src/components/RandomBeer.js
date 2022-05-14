import axios from "axios";
import { useEffect, useState } from "react";
import house from "../assets/houseIcon.png";
import { Link } from "react-router-dom";

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
              setRandomBeer(response.data);
            })
            .catch(error => {
              console.log("There was an error retrieving the beer list from the database.", error)
            })
    }, [])

    const renderBeerInfo = () => {
        return(
        <>
            <header className="navbar navbar-expand-lg navbar-light justify-content-center bg-info">
                <Link to="/"><img style={{width: "3rem"}} src={house} alt="Home Button"></img></Link>
            </header>
            <div className="container mt-5">
                <div>
                    <img style={{height: "50vh", width: "auto"}} src={randomBeer.image_url} alt={randomBeer.name}/>
                </div>
                <table class="table">
                <tbody>
                    <tr>
                        <td><h1>{randomBeer.name}</h1></td>
                        <td><h2>{randomBeer.attenuation_level}</h2></td>
                    </tr>
                    <tr>
                        <td>{randomBeer.tagline}</td>
                        <td>{randomBeer.first_brewed}</td>
                    </tr>
                </tbody>
                </table>
                <div>
                    <p>{randomBeer.description}</p>
                    <h6>{randomBeer.contributed_by}</h6>
                </div>
            </div>
        </>
        )
    }

    return(<>{randomBeer ? renderBeerInfo() : <p>Loading beer info...</p>}</>)
}

export default RandomBeer;