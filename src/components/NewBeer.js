import React, { useState, useEffect }  from 'react';
import './NewBeerForm.css';
import axios from "axios";


 function NewBeer(props) {

    const [name, setName] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');

    const nameInputChangeHandler = (event) => setName(event.target.value);
    const tagLineInputChangeHandler = (event) => setTagLine(event.target.value);
    const descriptionInputChangeHandler = (event) => setDescription(event.target.value);
    const firstBrewedInputChangeHandler = (event) => setFirstBrewed(event.target.value);
    const brewersTipsInputChangeHandler = (event) => setBrewersTips(event.target.value);
    const attenuationLevelInputChangeHandler = (event) => setAttenuationLevel(event.target.value);
    const contributedByInputChangeHandler = (event) => setContributedBy(event.target.value);


    const addtheNewBeer = () => {
        useEffect(() => {
            axios
           .post(
             `https://ih-beers-api2.herokuapp.com/beers/new`
           )
           .then((beersResult) => {
             console.log(beersResult)
             //setbeersList(beersResult.data);
           })
           .catch((error) => console.error(`Something went wrong with the handleBeersList function: ${error}`));
        },[]);
    }

    const handleNewBeerSubmission = (event) => {
        // Stops the default action of a form to refresh on submission
        event.preventDefault();

        // Add new movie to the DynamicList
        const newBeer = {
            name,
            tagLine,
            description,
            firstBrewed,
            brewersTips,
            attenuationLevel,
            contributedBy,
        };

       

        // Reset state
        //setAllValues(initialState);

        setName('');
        setTagLine('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel('');
        setContributedBy('');
    }


    return (
        <div>
        <h1>New Beer</h1>
           <form onSubmit={handleNewBeerSubmission} className='new-form'>
            <label>Name: </label>
            <input type="text" name="name"/>
            <label>Tagline: </label>
            <input type="text" name="tagline"/>
            <label>Description: </label>
            <input type="text" name="description"/>
            <label>First Brewed: </label>
            <input type="text" name="firstBrewed"/>
            <label>Brewers Tips: </label>
            <input type="text" name="brewersTips"/>
            <label>Attenuation Level: </label>
            <input type="number" name="attenuationLevel"/>
            <label>Contributed by: </label>
            <input type="text" name="contributedBy"/>
           </form>
        </div>
    );
};

export default NewBeer;