import axios from 'axios';            
import { useState } from "react";   
import { useNavigate } from "react-router-dom";
import Header from "./Header";
   
 
function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuation, setAttenuation] = useState(0)
  const [contributedBy, setContributedBy] = useState("")
 
  const navigate = useNavigate();       

  const handleSubmit = (e) => {          
    e.preventDefault();
    
    const body = { name: name, tagline: tagline, description: description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuation, contributed_by: contributedBy };
    
    axios
      .post(process.env.REACT_APP_API_URL + "/beers/new", body)
      .then((response) => {

        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuation(0);
        setContributedBy("");

        navigate('/beers');            
      });
  };
 
  
  return (
    <section className="NewBeer">
      <Header/>
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>  
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
 
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
          <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
         <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
         <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
         <label>Attentuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation(e.target.value)}
          value={attenuation}
        />
         <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        
        <button type="submit">Add new beer</button>
      </form>
    </section>
  );
}
 
export default NewBeer;