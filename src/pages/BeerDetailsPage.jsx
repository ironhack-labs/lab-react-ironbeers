import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beerInfo, setBeerInfo] = useState({});


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log(response.data);
                setBeerInfo(response.data);
            })
            .catch((e) => {
                console.log('error get beer info', e);
            })
    }, []);
    return (
        <div>
            <img src={beerInfo.image_url} height={300} width={150} alt="" />
            <h1>Beer: {beerInfo.name}</h1>
            <p>"{beerInfo.tagline}"</p>
            <p>First brewed on: {beerInfo.first_brewed}</p>
            <p>Attenuation level: {beerInfo.attenuation_level}</p>
            <p>Description: {beerInfo.description}</p>
            <p>Contributed by: {beerInfo.contributed_by}</p>
        </div>
    );
}
export default BeerDetailsPage;

