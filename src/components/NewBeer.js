//jshint esversion:9
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

export const NewBeer = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(null);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newBrew = {name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy};

    let response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBrew);

    /* console.log('response =>', response.data); */
  
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(null);
    setContributedBy("");
    
    
    if (response.data.message === "New beer successfully saved to database!") {

      navigate("../beers");
    }

  };


  return (
      
    <div className="NewBeer"> 

        <nav className='class="navbar navbar-dark bg-primary"'>
            <Link to="/"> <h3>Home</h3> </Link>
        </nav>
        
        <h1>Create New Beer</h1>

        <form onSubmit={handleSubmit} >

          <label>
            <span><b>Name:</b> </span>
            <input type="text" className='new-beer-input' value={name} id='name' name='name'onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span><b>Tagline:</b> </span>
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} className='new-beer-input' id='tagline' name='tagline'/>
          </label>0
          <label>
            <span><b>Description:</b> </span>
            <textarea className='new-beer-input' id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <label>
            <span><b>First Brewed</b></span>
            <input value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} type="text" className='new-beer-input' id='first_brewed' name='first_brewed' />
          </label>
          <label>
            <span><b>Brewers Tips</b></span>
            <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} className='new-beer-input' id='brewers_tips' name='brewers_tips' />
          </label>
          <label>
            <span><b>Attenuation Level</b></span>
            <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} className='new-beer-input' id='attenuation_level' name='attenuation_level' />
          </label>
          <label>
            <span><b>Contributed By</b></span>
            <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} className='new-beer-input' id='contributed_by' name='contributed_by' />
          </label>

          <button type='submit'>ADD NEW</button>

        </form>


    </div>
  )
}
