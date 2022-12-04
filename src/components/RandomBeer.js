import React, { useState, useEffect } from "react";


function RandomBeer() {
    const [random, setRandom] = useState([]);

    useEffect(() => {
        const getData = async function () {
            fetch("https://ih-beers-api2.herokuapp.com/beers/random")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setRandom(data);
                })
                .catch(error => {
                    console.log("you SUCK!");
                });
        }
        getData();
    }, []);

    return (
        <div className="random-beer">
            <img className="beers-img" src={random.image_url} alt={random.name} />
            <h1>{random.name}</h1>
            <p>{random.tagline}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>{random.contributed_by}</p>
        </div>
    );
}

export default RandomBeer;