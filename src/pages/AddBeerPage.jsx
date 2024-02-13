import { useState } from 'react';
import axios from 'axios';

function AddBeerPage() {

    const [ name, setName ] = useState("");
    const [ tagline, setTagline ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ firstBrewed, setFirstBrewed ] = useState("");
    const [ brewersTips, setBrewersTips ] = useState("");
    const [ attenuationLevel, setAttenuationLevel ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleTaglineInput = e => setTagline(e.target.value);
    const handleDescriptionInput = e => setDescription(e.target.value);
    const handleFirstBrewedInput = e => setFirstBrewed(e.target.value);
    const handleBrewersTipsInput = e => setBrewersTips(e.target.value);
    const handleAttenuationLevelInput = e => setAttenuationLevel(e.target.value);
    const handleContributedByInput = e => setContributedBy(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        try {
            const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
            console.log(response);
            if (response.status === 200) {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setAttenuationLevel(0);
                setContributedBy("");
            }
            
        } catch (err) {
            console.error(err);
        }
    }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
            name="name"
            type="text"
            value={name}
            onChange={handleNameInput}
        >    
        </input>
      </label>

      <label htmlFor="tagline">
        Tagline
        <input
            name="tagline"
            type="text"
            value={tagline}
            onChange={handleTaglineInput}
        >    
        </input>
      </label>

      <label htmlFor="description">
        Description
        <textarea
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionInput}
        >    
        </textarea>
      </label>

      <label htmlFor="first_brewed">
        First Brewed
        <input
            name="first_brewed"
            type="text"
            value={firstBrewed}
            onChange={handleFirstBrewedInput}
        >    
        </input>
      </label>

      <label htmlFor="brewers_tips">
        Brewers Tips
        <input
            name="brewers_tips"
            type="text"
            value={brewersTips}
            onChange={handleBrewersTipsInput}
        >    
        </input>
      </label>

      <label htmlFor="attenuation_level">
        Attenuation Level
        <input
            name="attenuation_level"
            type="number"
            value={attenuationLevel}
            onChange={handleAttenuationLevelInput}
        >    
        </input>
      </label>

      <label htmlFor="contributed_by">
        Contributed By
        <input
            name="contributed_by"
            type="text"
            value={contributedBy}
            onChange={handleContributedByInput}
        >    
        </input>
      </label>

      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
