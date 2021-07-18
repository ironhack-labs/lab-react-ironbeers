import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Header from '../components/Header';
import axios from 'axios';

function NewBeer() {

    const handleAddNewBeer = async (event) => {
        event.preventDefault();

        try {
            const { name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by } = event.target;

            let newBeer = {
                name: name.value,
                description: description.value,
                tagline: tagline.value,
                first_brewed: first_brewed.value,
                brewers_tips: brewers_tips.value,
                attenuation_level: attenuation_level.value,
                contributed_by: contributed_by.value
            }

            console.log(newBeer)

            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)

        }
        catch(error) {
            console.log("Something went wrong while creating a new beer", error)
        }
    }
    return (
        <>
            <Header />
            <form onSubmit={handleAddNewBeer} className="add-new-beer-container">
                <TextField label="Name" variant="standard" type="text" name="name"/> 
                <TextField label="Tagline" variant="standard" type="text" name="tagline"/> 
                <TextField label="Description" variant="standard" type="text" name="description" multiline maxRows={5}/> 
                <TextField label="First Brewed" variant="standard" type="text" name="first_brewed" /> 
                <TextField label="Brewer Tips" variant="standard" type="text" name="brewers_tips" /> 
                <TextField label="Attenuation Level" variant="standard" type="number" name="attenuation_level" /> 
                <TextField label="Contributed By" variant="standard" type="text" name="contributed_by" /> 
                <Button type="submit" variant="contained" color="primary">ADD NEW</Button>
            </form>
        </>
    )
}

export default NewBeer;
