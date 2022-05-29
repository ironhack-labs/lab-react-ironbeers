import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'

function NewBeerPage() {
  const [beer, setBeer] = useState("");
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleBeer = (e) => setBeer(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const handleBrewers_tips = (e) => setBrewers_tips(e.target.value);
  const handleAttenuation_level = (e) =>
    setAttenuation_level(parseInt(e.target.value));
  const handleContributed_by = (e) => setContributed_by(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };


    axios
    .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
    .then(() => {
      setBeer("");
      setName("");
      setTagline("");
      setDescription("");
      setFirst_brewed("");
      setBrewers_tips("");
      setAttenuation_level("");
      setContributed_by("");
    })
    .catch((err) => console.log(err));
};



  return (
    <div>
     <NavBar />
     {
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleName} />
            <br></br>

            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={handleTagline}
            />
             <br></br>

            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
             <br></br>

            <label htmlFor="first_brewed">First brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={first_brewed}
              onChange={handleFirst_brewed}
            />
             <br></br>

            <label htmlFor="brewers_tips">Brewers tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={brewers_tips}
              onChange={handleBrewers_tips}
            />
             <br></br>

             <label htmlFor="attenuation_level">Attenuation level</label>
            <input
              type="number"
              name="attenuation_level"
              value={attenuation_level}
              onChange={handleAttenuation_level}
            />
             <br></br>

            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              name="contributed_by"
              value={contributed_by}
              onChange={handleContributed_by}
            />
             <br></br>

            <button type="submit">Create</button>
          </form>
        </>
      }
      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
     
    </div>
  )
}

export default NewBeerPage