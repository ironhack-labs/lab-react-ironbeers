
//NewBeer.js

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function NewBeer() {
    const [ beerName, setBeerName ] = useState("");
    const [ tagline, setTagline ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ first_brewed, setFirstBrewed ] = useState("");
    const [ brewers_tips, setBrewersTips] = useState("");
    const [ attenuation_level, setAttentuationLevel] = useState(0);
    const [ contributed_by, setContributedBy ] =useState("");    
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = { 
                        name: beerName
                        ,tagline: tagline
                        ,description: description
                        ,first_brewed: first_brewed
                        ,brewers_tips: brewers_tips
                        ,attenuation_level: attenuation_level
                        ,contributed_by: contributed_by
                    }
        
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
         .then((response) => {
             console.log(response);
            //Reset all states
            setBeerName("");
            setTagline("");
            setDescription("");
            setFirstBrewed ("");
            setBrewersTips("");
            setAttentuationLevel(0);
            setContributedBy("");
            
            //Go to beers list
            navigate("/pages/ListBeers")
         });
    };

    return (
        <div className="NewBeerPage">
        <Header />
        <h3>Create New Beer</h3>
        
        <form onSubmit={handleSubmit}>   
          <label>Name: </label>
          <input
            type="text"
            name="beerName"
            onChange={(e) => setBeerName(e.target.value)}
            value={beerName}
          />
            <br />
          <label>Tagline: </label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
            <br />
            <label>Description: </label>
            <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <br />
            <label>First brewed: </label>
            <input
                type="text"
                name="first_brewed"
                onChange={(e) => setFirstBrewed(e.target.value)}
                value={first_brewed}
            />
            <br />
            <label>Brewers tips: </label>
            <input
                type="text"
                name="brewers_tips"
                onChange={(e) => setBrewersTips(e.target.value)}
                value={brewers_tips}
            />
            <br />
            <label>Attentuation level: </label>
            <input
                type="number"
                name="attenuation_level"
                onChange={(e) => setAttentuationLevel(e.target.value)}
                value={attenuation_level}
            />
            <br />
            <label>Contributed by: </label>
            <input
                type="text"
                name="contributed_by"
                onChange={(e) => setContributedBy(e.target.value)}
                value={contributed_by}
            />
          <br />
          <br />
          <button type="submit">Create the beer!</button>
          
        </form>
      </div>  
    );
}

export default NewBeer;