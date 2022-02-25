
//RandomBeer.js
import axios from 'axios';
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';

function RandomBeer() {
    const [randomBeerDeets, setRandomBeerDeets] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { 
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((responseFromApi) => {
            console.log(responseFromApi.data);
            setRandomBeerDeets(responseFromApi.data);

            const randomBeerId = responseFromApi.data._id;
            navigate(`/beers/${randomBeerId}`);
        });
     }, [] ); 

    return (
        <div>
            <Header />
            <h1>One moment, finding you a random beer...</h1>
        </div>
    );
}

export default RandomBeer;