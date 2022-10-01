import Navigation from "../components/Navigation";
import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((result) => {
        console.log("New Beer about to be pushed: ", result);
        setNewBeer({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((err) => console.log("Got an error: ", err));
  };

  return (
    <div>
      <Navigation />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={newBeer.name}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, name: evt.target.value });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="tagline"
            value={newBeer.tagline}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, tagline: evt.target.value });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="description"
            value={newBeer.description}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, description: evt.target.value });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="first brewed"
            value={newBeer.first_brewed}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, first_brewed: evt.target.value });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="brewers tips"
            value={newBeer.brewers_tips}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, brewers_tips: evt.target.value });
            }}
          />
          <br />
          <input
            type="number"
            placeholder="attenuation level"
            value={newBeer.attenuation_level}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, attenuation_level: evt.target.value });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="contributed by"
            value={newBeer.contributed_by}
            onChange={(evt) => {
              setNewBeer({ ...newBeer, contributed_by: evt.target.value });
            }}
          />

          <br />
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
