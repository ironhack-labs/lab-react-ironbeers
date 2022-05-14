import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    const newBeer = {
       name,
       tagline,
      description,
      attenuationLevel,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      contributed_by: contributedBy,
    }
  
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    .then((response) => {
      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel('');
      setContributedBy('');

      navigate("/beers");

    });
  
  
  }










  return (
    <div>
       <form onSubmit={handleSubmit}>
          <label>Name</label><br/>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          /><br/>
          <label>Tagline</label><br/>
          <input
            type="text"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          /><br/>
       
          <label>Description</label><br/>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea><br/>
          <label>First Brewed</label><br/>
          <input
            type="text"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          /><br/>

          <label>Brewers Tips</label><br/>
          <input
            type="text"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          /><br/>
    
          <label>Attenuation Level</label><br/>
          <input
            type="number"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          /><br/>

          <label>Contributed By</label><br/>
          <input
            type="text"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          /><br/><br/>
        <button >Add New Beer</button>
      </form>
    </div>
  )
}

export default NewBeer