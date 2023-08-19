
import { useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";
 
function NewBeer() {
  
  const [image, setImage] = useState("");     
  const [name, setName] = useState("");            
  const [tagline, setTagline] = useState("");    
  const [first_brewed, setFirst_brewed] = useState("");         
  const [attenuation_level, setAttenuation_level] = useState(1);     
  const [description, setDescription] = useState("");           
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {          // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { image:image, name: name, tagline: tagline, first_brewed: first_brewed, attenuation_level: attenuation_level, description: description, contributed_by: contributed_by};
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setImage("");        
        setName("");
        setTagline("");
        setFirst_brewed("");
        setAttenuation_level("");
        setDescription("");
        setContributed_by("");

        navigate('/beers');      
      });
  };


  return (

    <div className="AddBeer">
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>

        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <br></br>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <br></br>
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        />
        <br></br>
        <label>Attenuation Level</label>
        <input
          type="text"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />
        <br></br>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br></br>
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        />
        <br></br>
        <button type="submit">Create Beer</button>
        
      </form>
    </div>
  );

}

export default NewBeer;