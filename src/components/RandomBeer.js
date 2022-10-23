import RandomBeerImage from "../assets/random-beer.png"
import Header from "./Header"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RandomBeer() {

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchRandomDetails();
    }, []);

    const fetchRandomDetails = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => console.log("error getting random beer details from API", e));
        }
        

return (
    <>
        <Header />
        <img src={RandomBeerImage} alt="Random Beer" />
        <h1>Random Beer</h1>

        <div className="box" key={details._id} >
            <h2>Name: {details.name}</h2>
            <p><img src={details.image_url} alt="Random Beer Details" className="beer-img" /> </p>
            <p>Tagline: <strong>{details.tagline}</strong></p>
            <p>First brewed: {details.first_brewed}</p>
            <p>Attenuation level: {details.attenuation_level}</p>
            <p>Description: {details.description}</p>
            <p>Contributed by {details.contributed_by}</p>
        </div>

    </>
);
}

export default RandomBeer;