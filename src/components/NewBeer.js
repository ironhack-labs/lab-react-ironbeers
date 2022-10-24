import NavBar from './NavBar';

import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


function NewBeer(props) {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState('');
    const [contributedBy, setContributedBy] = useState('');

    
    
      const handleSubmit = (e) => {
          e.preventDefault();  
  
          const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attuenuation_level: attenuationLevel,
            contributed_by: contributedBy
        };

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
                console.log('response from post' + response)
                
            })
            .catch((error) => console.log('error creating new beer', error))


         //clear form
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel("");
            setContributedBy("");
    };

        
    return (
        <>
        <NavBar />
        <h1> Add a new beer to the catalogue !</h1>
        <form onSubmit={handleSubmit}>
    
          <label>Name</label>
          <input
            value={name}
            type="text"
            name="name"
            placeholder="choose a name"
            onChange={(e) => { setName(e.target.value) }}
          />
    
        <label>Tagline</label>
          <input
            value={tagline}
            type="text"
            name="tagline"
            placeholder="enter a tagline"
            onChange={(e) => { setTagline(e.target.value) }}
          />
    
          <label>Description</label>
          <input
            value={description}
            type="text"
            placeholder="enter a description"
            onChange={(e) => { setDescription(e.target.value)}}
          />

        <label>First Brewed</label>
          <input
            value={firstBrewed}
            type="text"
            placeholder="date of first brewed"
            onChange={(e) => { setFirstBrewed(e.target.value)}}
          />

        <label>Brewers Tips</label>
          <input
            value={brewersTips}
            type="text"
            placeholder="enter some tips"
            onChange={(e) => { setBrewersTips(e.target.value)}}
          />

        <label>Attenuation Level</label>
          <input
            value={attenuationLevel}
            type="number"
            placeholder="attenuation level"
            onChange={(e) => { setAttenuationLevel(e.target.value)}}
          />

        <label>Contributed by</label>
          <input
            value={contributedBy}
            type="text"
            placeholder="Contributed by"
            onChange={(e) => { setContributedBy(e.target.value)}}
          />

    
          <button type="submit">Create</button>
        </form>
        </>   
        )
};
    
export default NewBeer;