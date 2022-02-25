
//SingleBeer.js
import axios from 'axios';
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Header from '../components/Header';

function SingleBeer() {
    const { beerId } = useParams();
    const beerUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    const [beerDeets, setBeerDeets] = useState([]);


    useEffect(() => { 
        axios.get(beerUrl)
        .then((responseFromApi) => {
            console.log(responseFromApi.data);
            setBeerDeets(responseFromApi.data)
        });
     }, [] ); 

    return (
        <div>
            <Header />

            <div className="SingleBeerDetails">
                <img src={beerDeets.image_url} alt="single-beer" />

                <h3>{beerDeets.name} - {beerDeets.attenuation_level}</h3>
                <h5>{beerDeets.tagline} - {beerDeets.first_brewed}</h5>
                <p>{beerDeets.description}</p>
                <br />
                Contributed by: {beerDeets.contributed_by}
            </div>
        </div>
    );
}

export default SingleBeer;