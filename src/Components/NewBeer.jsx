import React, { useState } from 'react'; // Importing React and useState hook from react
import axios from 'axios'; // Importing Axios library
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom

function NewBeer() {
  const [name, setName] = useState(''); // Initializing and destructuring name state variable and its setter function
  const [tagline, setTagline] = useState(''); // Initializing and destructuring tagline state variable and its setter function
  const [description, setDescription] = useState(''); // Initializing and destructuring description state variable and its setter function
  const [firstBrewed, setFirstBrewed] = useState(''); // Initializing and destructuring firstBrewed state variable and its setter function
  const [brewersTips, setBrewersTips] = useState(''); // Initializing and destructuring brewersTips state variable and its setter function
  const [attenuationLevel, setAttenuationLevel] = useState(0); // Initializing and destructuring attenuationLevel state variable and its setter function
  const [contributedBy, setContributedBy] = useState(''); // Initializing and destructuring contributedBy state variable and its setter function
  const navigate = useNavigate(); // Initializing and destructuring navigate function from useNavigate hook

  function handleSubmit(e) { // Function to handle form submission
    e.preventDefault(); // Preventing the default form submission behaviour

    const beerToPost = { // Creating an object with the form data
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerToPost) // Making a POST request to the API with the form data
      .then(() => { // Handling the success response
        console.log('Beer successfully added to database:', beerToPost);
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(0);
        setContributedBy('');
        alert('Nice one mate, your beer was added!');
      })
      .catch(error => { // Handling the error response
        console.error('Error adding beer to database:', error);
        alert(`Oops, something went wrong: ${error.message}`);
      });

    navigate('/'); // Navigating to the home page after the form submission is complete
  }

  return (
    <div className="NewBeer">
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Tagline
          <input type="text" value={tagline} onChange={e => setTagline(e.target.value)} required />
        </label>
        <label>
          Description
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </label>
        <label>
          First Brewed
          <input type="text" value={firstBrewed} onChange={e => setFirstBrewed(e.target.value)} required />
        </label>
        <label>
          Brewers Tips
          <input type="text" value={brewersTips} onChange={e => setBrewersTips(e.target.value)} required />
        </label>
        <label>
          Attenuation Level
          <input type="number" value={attenuationLevel} onChange={e => setAttenuationLevel(e.target.value)} required />
        </label>
        <label>
          Contributed By
          <input type="text" value={contributedBy} onChange={e => setContributedBy(e.target.value)} required />
        </label>
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;
