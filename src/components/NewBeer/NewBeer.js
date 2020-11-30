import React, {useState} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './NewBeer.css'

const initialState = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

const NewBeer = () => {
    const [beerValues, setBeerValues] = useState(initialState)

    const inputChangeHandler = (event) => {
        let {name, value} = event.target;
        setBeerValues({...beerValues, [name]: value});
    }

    const addBeer = (event) => {
        event.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerValues)
        .then()
        .catch((error) => error);

        setBeerValues(initialState);
    }

    return(
        <div>
            <Header />
            <h1>Add A New Beer</h1>
            <form onSubmit={addBeer}>

            <label for="name">Name:</label>
            <input type="text" name="name" value={beerValues.name} onChange={inputChangeHandler}/>
            <br/>
            <label for="tagline">Tagline:</label>
            <input type="text" value={beerValues.tagline} name="tagline" onChange={inputChangeHandler}/>
            <br/>
            <label for="description">Description:</label>
            <input type="text" value={beerValues.description} name="description" onChange={inputChangeHandler}/>
            <br/>
            <label for="first_brewed">First Brewed:</label>
            <input type="text" value={beerValues.first_brewed} name="first_brewed" onChange={inputChangeHandler}/>
            <br/>
            <label for="brewers_tips">Brewers Tips:</label>
            <input type="text" value={beerValues.brewers_tips} name="brewers_tips" onChange={inputChangeHandler}/>
            <br/>
            <label for="attenuation_level">Attenuation Level:</label>
            <input type="number" value={beerValues.attenuation_level} name="attenuation_level" onChange={inputChangeHandler}/>
            <br/>
            <label for="contributed_by">Contributed:</label>
            <input type="text" value={beerValues.contributed_by} name="contributed_by" onChange={inputChangeHandler}/>
            <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default NewBeer;