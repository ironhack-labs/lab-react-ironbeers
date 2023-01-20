import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const NewBeer = () => {
  
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers/";

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [firstBrewed, setFirstBrewed] = useState();
  const [brewersTips, setBrewersTips] = useState();
  const [attenuation, setAttenuation] = useState();
  const [contributed, setContributed] = useState();

  const newBeer = {
    name:name,
    tagline: tagline,
    description: description ,
    first_brewed: firstBrewed ,
    brewers_tips: brewersTips ,
    attenuation_level: attenuation ,
    contributed_by: contributed ,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL +"new", newBeer)
      .then((newBeer) => {
        console.log("we created a beer...", newBeer)
        navigate("/beers")
      })
      .catch((e) => {
        console.log("error creatring beer....", newBeer, "and the error was", e);
      });

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuation("");
    setContributed("");
  };

  return (
    <div id="beerDetailCard">
      <Header />
      <h1>Create your own BEER</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required={true}
            value={name}
            placeholder="Duff"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>

        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            required={true}
            value={tagline}
            placeholder="Can't Get Enough of That Wonderful Duff"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          ></input>
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            required={true}
            value={description}
            placeholder="Give me your best description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="first_brewed"
            required={true}
            value={firstBrewed}
            placeholder="1900"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          ></input>
        </label>

        <label>
          BrewersTips
          <input
            type="text"
            name="brewers_tips"
            required={false}
            value={brewersTips}
            placeholder="Drink cold, drink often"
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          ></input>
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuation_level"
            required={false}
            value={attenuation}
            placeholder="100"
            onChange={(e) => {
              setAttenuation(e.target.value);
            }}
          ></input>
        </label>

        <label>
          Contributed by
          <input
            type="text"
            name="contributed_by"
            required={false}
            valu  e={contributed}
            placeholder="100"
            onChange={(e) => {
              setContributed(e.target.value);
            }}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBeer;