import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "../App.css"

function NewBeer() {

const navigate= useNavigate();
  const [beers, setBeers] = useState({

    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips:"",
    attenuation_level: Number,
    contributed_by:""

  })

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
 const [brewers_tips, setBrewers_tips] = useState("");
 const [attenuation_level, setAttenuation_level] = useState("");
 const [contributed_by, setContributed_by] = useState("");


const handleSubmit = (event) => {
event.preventDefault();

const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};

axios({
  method: "post",
  url: "https://ih-beers-api2.herokuapp.com/beers/new",
  data: newBeer,
})
  .then(function (response) {
    navigate("/beers");
  })
  .catch(function (response) {
  });

// clear Form after submitting
setName("");
setTagline("");
setDescription("");
setFirst_brewed("");
setBrewers_tips("");
setAttenuation_level("");
setContributed_by("");


}

    return (
      <div className="">
        <h1>Create Beer</ h1>
        <form  onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="enter the name" value={name} onChange={(e) => { setName(e.target.value) }}/>
          <input type="text" name="tagline" placeholder="enter the tagline" value={tagline} onChange={(e) => { setTagline(e.target.value) }}/>
          <input type="text" name="description" placeholder="enter a description" value={description} onChange={(e) => { setDescription(e.target.value) }}/>
          <input type="text" name="first_brewed" placeholder="enter first brewed info" value={first_brewed} onChange={(e) => { setFirst_brewed(e.target.value) }}/>
          <input type="text" name="brewers_tips" placeholder="enter brewers tips" value={brewers_tips} onChange={(e) => { setBrewers_tips(e.target.value) }}/>
          <input type="number" min={1} name="attenuation_level" placeholder="attenuation level" value={attenuation_level} onChange={(e) => { setAttenuation_level(e.target.value) }}/>
          <input type="text" name="contributed_by" placeholder="contributed by:" value={contributed_by} onChange={(e) => { setContributed_by(e.target.value) }}/> <br/>
         <button>Create</button>
        </form>
        <Link  to="/beers">Back</Link> <br/>
      </div>
    );
  }

export default NewBeer;