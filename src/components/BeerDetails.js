import BeerListImage from "../assets/beers.png"
import Header from "./Header"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetails() {
    const { beerId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchBeerDetails();
    }, []);

    const fetchBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => console.log("error getting beer details from API", e));
    }



    return (
        <>
            <Header />
            <img src={BeerListImage} alt="beers" className="homepageImage" />
            <h1>Beer Details</h1>

            <div className="box" key={details._id} >
                <h2>Name: {details.name}</h2>
                <p><img src={details.image_url} alt="Beer Details" className="beer-img" /> </p>
                <p>Tagline: <strong>{details.tagline}</strong></p>
                <p>First brewed: {details.first_brewed}</p>
                <p>Attenuation level: {details.attenuation_level}</p>
                <p>Description: {details.description}</p>
                <p>Contributed by {details.contributed_by}</p>
            </div>

        </>
    );
}

export default BeerDetails;