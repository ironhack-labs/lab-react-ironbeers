import {React, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


  const NewBeer = (props) => {
    console.log(props);
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [tips, setTips] = useState('');
    const [level, setLevel] = useState('');
    const [contributor, setContributor] = useState('');



    const history = useHistory();
    console.log(name) 
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // take all the inputs values
      const beer = { name, tagline, description, firstBrewed, tips, level, contributor };
      // while we send the item to the server is true -->show a different button
      console.log(beer) // object

      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);
      console.log(response)
      console.log(response.data)
      props.onHandleSubmit(response.data); // pass to the parent --> App.js
      history.push('/beers');
    }

  
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Tagline:</label>
          <input 
            type="text" 
            required 
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <label>Description:</label>
          <textarea 
            type="text" 
            required 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>First Brewed:</label>
          <input 
            type="text" 
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
          <label>Brewed Tips:</label>
          <input 
            type="text" 
            value={tips}
            onChange={(e) => setTips(e.target.value)}
          />
          <label>Attenuation Level:</label>
          <input 
            type="text" 
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <label>Contributed By:</label>
          <input 
            type="text" 
            value={contributor}
            onChange={(e) => setContributor(e.target.value)}
          />
          <button>ADD BEER</button>
        </form>
      </div>
    );
  }
   
  export default NewBeer;