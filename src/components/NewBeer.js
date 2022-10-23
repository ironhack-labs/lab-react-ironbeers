import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./NewBeer.css";

function NewBeer({ callbackToFetchBeers }) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response);
        callbackToFetchBeers();
        navigate("/beers");
      })
      .catch((e) => console.log("error creating beers", e));
  };

  return (
    <div className='NewBeer'>
      <Header />
      <form className='col-lg-6 offset-lg-3 ' onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Tagline</label>
          <input
            type='text'
            name='tagline'
            className='form-control'
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Description</label>
          <textarea
            type='text'
            name='description'
            className='form-control'
            rows='6'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>First Brewed</label>
          <input
            type='text'
            name='first_brewed'
            className='form-control'
            value={first_brewed}
            onChange={(e) => {
              setFirst_brewed(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Brewers Tips</label>
          <input
            type='text'
            name='brewers_tips'
            className='form-control'
            value={brewers_tips}
            onChange={(e) => {
              setBrewers_tips(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Attenuation Level</label>
          <input
            type='number'
            name='attenuation_level'
            className='form-control'
            value={attenuation_level}
            onChange={(e) => {
              setAttenuation_level(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formGroupExampleInput'>Contributed By</label>
          <input
            type='text'
            name='contributed_by'
            className='form-control'
            value={contributed_by}
            onChange={(e) => {
              setContributed_by(e.target.value);
            }}
          />
        </div>
        <button className='btn btn-primary'>ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;
