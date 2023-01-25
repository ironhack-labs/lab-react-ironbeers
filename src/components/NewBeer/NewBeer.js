import Header from "../Header/Header";
import { useState } from "react"; 
import axios from 'axios'; 
import { useNavigate } from "react-router-dom"; 
import './NewBeer.css'

function NewBeer (){
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");   
  const [description, setDescription] = useState("");  
  const [firstBrewed , setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState(""); 
  const [attenuationLevel, setAttenuationLevel] = useState(1); 
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {          // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { name: name, tagline: tagline, description: description, 
        first_brewed: firstBrewed, brewers_tips: brewersTips, 
        attenuation_level: attenuationLevel, contributed_by: contributedBy};
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(1);
        setContributedBy("");

        // Navigate to the `/` page
        navigate('/beers'); 
      });
  };

return (
    <div className="AddBeerPage">
        <Header/>
        <h2>Add New Beer</h2>

        <form onSubmit={handleSubmit} id="addBeerForm">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
 
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description:</label>
        <input id="descriptionInput"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />        

        <label>First brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        /> 

        <label>Brewers tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        /> 

        <label>Attenuation level:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />

        <label>Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        /> 
        
        <button type="submit">Create Beer</button>
        
      </form>
    </div>
)
}
export default NewBeer ;