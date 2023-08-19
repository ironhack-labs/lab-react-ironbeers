
import { useState } from "react";
import axios from 'axios';      


function AddNewBeer() {
    const [image, setImage] = useState("");     
    const [name, setName] = useState("");            
    const [tagline, setTagline] = useState("");    
    const [first_brewed, setFirst_brewed] = useState("");         
    const [attenuation_level, setAttenuation_level] = useState(1);     
    const [description, setDescription] = useState("");           
    const [contributed_by, setContributed_by] = useState("");


    const handleSubmit = (e) => {          
        e.preventDefault();
        // Create the body for the POST request
        const body = { image: image, name: name, tagline: tagline, first_brewed: first_brewed, attenuation_level: attenuation_level, description: description, contributed_by: contributed_by };
        
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
          .then((response) => {
            // Reset the state
            setImage("")
            setName("");
            setTagline("");
            setFirst_brewed("");
            setAttenuation_level("");
            setDescription("");
            setContributed_by("");
          });
      };

  return (
    <div className="AddNewBeerForm">
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}> 
      <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          /><br></br>

       <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        /><br></br>

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        /><br></br>
        
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        /><br></br>

        <label>Attenuation Level</label>
        <input
          type="Number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        /><br></br> <br></br>

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        /><br></br> <br></br>
        
        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        /><br></br>
        <br></br>

        <button type="submit">Create New Beer</button>
        
       </form>
    </div>
  );
}

export default AddNewBeer;
