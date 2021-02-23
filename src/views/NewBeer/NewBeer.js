import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const NewBeer = () => {
  const[name,setName] = React.useState("")
  const[tagline,setTagline] = React.useState("")
  const[description,setDescription] = React.useState("")
  const[first_brewed ,setFirstBrewed] = React.useState("")
  const[brewers_tips ,setBrewersTips] = React.useState("")
  const[attenuation_level,setAttenuationLevel] = React.useState("")
  const[contributed_by,setContributedBy] = React.useState("")

  const history = useHistory()
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const beer = {name,tagline,description,first_brewed ,brewers_tips ,attenuation_level,contributed_by}
    fetch("https://ih-beers-api2.herokuapp.com/beers/new",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(beer)
    }).then(()=>{
      console.log("new beer added")
      history.push("/beers")
    })
  }
  
  return (
    <div className="create">
      <li>
        <Link to="/">Home</Link>
      </li>
      <h1>New Beer</h1>
      <form onSubmit = {handleSubmit}>
        <label>Name :</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />
        <label>Tagline :</label>
        <input 
          type="text" 
          required
          value={tagline}
          onChange={(e)=> setTagline(e.target.value)}
          />
        <label>Description :</label>
        <textarea 
     
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        ></textarea>
        <label>First Brewed :</label>
        <input 
        type="text" 
        
        value={first_brewed }
        onChange={(e)=> setFirstBrewed(e.target.value)}
         />
        <label>Brewers Tips :</label>
        <input 
        type="text" 
     
        value={brewers_tips }
        onChange={(e)=> setBrewersTips(e.target.value)}
        />
        <label>Attenuation Level :</label>
        <input 
        type="number" 
     
        value={attenuation_level}
        onChange={(e)=> setAttenuationLevel(e.target.value)}
        />
        <label>Contributed By :</label>
        <input 
        type="text" 
        required
        value={contributed_by}
        onChange={(e)=> setContributedBy(e.target.value)}
        />
        <button>ADD NEW </button>
       
      </form>
    </div>
  );
};

export default NewBeer;
