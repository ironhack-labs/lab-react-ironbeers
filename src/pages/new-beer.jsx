import Navigation from "../components/Navigation";
import { useState } from "react";
import axios from "axios";
import "../styles/form.css";

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    id: "",
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
          id: "",
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
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={newBeer.id}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, id: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              value={newBeer.tagline}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, tagline: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              rows="10"
              value={newBeer.description}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, description: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="firstBrewed">First Brewed</label>
            <input
              type="text"
              id="firstBrewed"
              value={newBeer.first_brewed}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, first_brewed: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="brewersTips">Brewers Tips</label>
            <input
              type="text"
              id="brewersTips"
              value={newBeer.brewers_tips}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, brewers_tips: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="attenuation">Attenuation Level</label>
            <input
              type="number"
              id="attenuation"
              value={newBeer.attenuation_level}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, attenuation_level: evt.target.value });
              }}
            />
          </div>

          <div className="form-element">
            <label htmlFor="contributor">Contributed By</label>
            <input
              type="text"
              id="contributor"
              value={newBeer.contributed_by}
              onChange={(evt) => {
                setNewBeer({ ...newBeer, contributed_by: evt.target.value });
              }}
            />
          </div>
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
