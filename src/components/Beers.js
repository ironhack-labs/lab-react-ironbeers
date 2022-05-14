import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Beers() {

    const [beers, setBeers] = useState([""])

    useEffect (() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data);
            })
            .catch(e => console.log("error getting beers from API", e))
    }, [])

    return (
        <div className="BeerList">
            <h1>List of beers</h1>
            {beers.map((element) => {
                return (
                    <div className="Beers">
                        <img src={element.image_url} alt={element.name} />
                        <p>Name: {element.name}</p>
                        <p>Tagline: {element.tagline}</p>
                        <p>Contributed by: {element.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Beers;