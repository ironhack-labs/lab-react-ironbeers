import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function NewBeer(props) {
  
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleNameInput = (e) => setName(e.target.value);

  const handleTaglineInput = (e) => setTagline(e.target.value);

  const handleDescriptionInput = (e) => setDescription(e.target.value);

  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value); 

  const handleBrewersTips = (e) => setBrewersTips(e.target.value);

  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);

  const handleContributedBy = (e) => setContributedBy(e.target.value); 

  const newBeer = {
    'name': name,
    'tagline': tagline,
    'description': description,
    'brewers_tips': brewersTips,
    'first_brewed': firstBrewed,
    'attenuation_level': attenuationLevel,
    'contributed_by': contributedBy
};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then(response => {
      navigate('/beers');
    })
    .catch((error) => {
      console.log('Error creating a new Beer...', error)
    });


    // Reset the state
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("")
    setAttenuationLevel("")
    setContributedBy("")
  }


  return (
    <div className="AddBeer">
      <h4>Add Beer</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleNameInput} />

        <label>Tagline:</label>
        <input type="text" name="tagline" value={tagline} onChange={handleTaglineInput} />

        <label>Description:</label>
        <input type="text" name="description" value={description} onChange={handleDescriptionInput} />

        <label>First Brewed:</label>
        <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewedInput} />

        <label>Brewers Tips:</label>
        <input type="text" name="brewersTips" value={brewersTips} onChange={handleBrewersTips} />

        <label>Attenuation Level:</label>
        <input type="text" name="attenuation" value={attenuationLevel} onChange={handleAttenuationLevel} />

        <label>Contributed By:</label>
        <input type="text" name="contributed" value={contributedBy} onChange={handleContributedBy} />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
