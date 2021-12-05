import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddBeerPage.css"
import HeaderNav from "../../components/Header/HeaderNav";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewersTips = (e) => setBrewersTips(e.target.value);
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
    const handleContributedBy = (e) => setContributedBy(e.target.value);

    const handleSubmit = async (event) => {
        try {
            //Prevent page reloads on submit
            event.preventDefault();
        
            const newBeer = {
              name: name,
              tagline: tagline,
              description: description,
              firstBrewed: firstBrewed,
              brewersTips: brewersTips,
              attenuationLevel: attenuationLevel,
              contributedBy: contributedBy
            }
        
            // Make a post request to API
            const response = await axios.post( `${apiURL}/new`, newBeer);
        
            // Clear Inputs
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(1);
            setContributedBy("");
        
            //Redirects use to Homepage - needs to call it outside of the handleSubmit function
            navigate("/")
          } catch (error) {
            setErrorMessage('Something went wrong. Try again')
            setTimeout(() => setErrorMessage(undefined), 2000);
          }
    }

    return ( 
        <div>
            <HeaderNav />
            <h2>Add Beer Page</h2>
            <form onSubmit= {handleSubmit} >
                {errorMessage && <p>{errorMessage}</p>}

                <label>Name</label>
                <input type="text" name="name" value={name} onChange={ handleName } />

                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={ handleTagline } />

                <label>Description</label>
                <input type="text" name="description" value={description} onChange={ handleDescription } />

                <label>First Brewed</label>
                <input type="text" name="firstBrewed" value={firstBrewed} onChange={ handleFirstBrewed } />

                <label>Brewers Tips</label>
                <input type="text" name="brewersTips" value={brewersTips} onChange={ handleBrewersTips } />

                <label>Attenuation Level</label>
                <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={ handleAttenuationLevel } />

                <label>Contributed By</label>
                <input type="text" name="contributedBy" value={contributedBy} onChange={ handleContributedBy } />

                <button type="submit">Add New</button>
            </form>
        </div>
     );
}

export default AddBeerPage;