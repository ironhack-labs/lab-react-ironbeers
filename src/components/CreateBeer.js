import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const CreateBeer = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [attenuationLevel,setAttenuationLevel ] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [contributedBy,setContributedBy ] = useState('');

    const handleSubmit = (event) => {
 
        event.preventDefault();

        const newBeer = {

            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips :brewersTips,
            attenuation_level: attenuationLevel, 
            contributed_by: contributedBy,
            image_url: 'https://www.google.com/search?q=placeholder+image+beer&oq=placeholder+image+beer&aqs=chrome..69i57j33i160l3.5358j0j7&sourceid=chrome&ie=UTF-8#imgrc=Xt31WfNdpUr8kM'

        };

       axios.post(`${process.env.REACT_APP_APIURL}/create`, newBeer)
       .then(response => {
        props.callbackToLoadBeers();
        navigate('/beers')
       })
       .catch(e => {
        console.log('There was a problem while creating the new beers', e)
       });

    }

  return (
    <>
      <NavBar />
  
     <h1>Create your OWN Beer post</h1>
     <form onSubmit={handleSubmit} /> 
     
      <label>
        Name: 
        <input type='text' className="form-to-create" name="name" value={name} onChange={(event) => {setName(event.target.value)}}  /> 
      </label>

      <label>
        Tagline: 
        <input type='text' className="form-to-create" name="tagline" value={tagline} onChange={(event) => {setTagline(event.target.value)}}  /> 
      </label>

      <label>
        Description: 
        <input type='text' className="form-to-create" name="description" value={description} onChange={(event) => {setDescription(event.target.value)}}  /> 
      </label>


       {/* <label>
        First Brewed: 
        <input type='text' className="form-to-create" name="first_brewed" value={first_brewed} onChange={(event) => {setFirstBrewed(event.target.value)}}  /> 
      </label>

      <label>
        Brewers Tips: 
        <input type='text' className="form-to-create" name="brewers_tips" value={brewers_tips} onChange={(event) => {setBrewersTips(event.target.value)}}  /> 
      </label>

      <label>
        Attenuation Level: 
        <input type='text' className="form-to-create" name="attenuation_level" value={attenuation_level} onChange={(event) => {setAttenuationLevel(event.target.value)}}  /> 
      </label>

      <label>
        Contributed By: 
        <input type='text' className="form-to-create" name="contributed_by" value={contributed_by} onChange={(event) => {setContributedBy(event.target.value)}}  /> 
      </label>  */}

<button> SAVE </button>
    </>
  );
};

export default CreateBeer;
