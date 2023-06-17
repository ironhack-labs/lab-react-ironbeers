import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [newName, setNewName] = useState("");
  const [newTagline, setNewtagline] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newFirst_brewed, setNewFirst_brewed] = useState("");
  const [newBrewers_tips, setNewBrewers_tips] = useState("");
  const [newAttenuation_level, setNewAttenuation_level] = useState(0);
  const [newContributed_by, setNewContributed_by] = useState("");

  const navigate = useNavigate();
  const [beerObj, setBeerObj] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("this is my beer", beerObj);
    try {
      const { data } = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerObj
      );
      console.log("New beer added", data);
      setNewName("");
      setNewtagline("");
      setNewDescription("");
      setNewFirst_brewed("");
      setNewBrewers_tips("");
      setNewAttenuation_level("");
      setNewContributed_by("");
    } catch (err) {
      console.log("error adding beer", err);
    }
  };
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setBeerObj({ ...beerObj, [inputName]: inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <strong>Name</strong>
          </label>
          <input
            type="text"
            name="name"
            value={beerObj.name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>Tagline</strong>
          </label>
          <input
            type="text"
            name="tagline"
            value={beerObj.tagline}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>Description</strong>
          </label>
          <input
            className="inputDescription"
            type="text"
            name="description"
            value={beerObj.description}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>First Brewed</strong>
          </label>
          <input
            type="text"
            name="first_brewed"
            value={beerObj.first_brewed}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>Brewers Tips</strong>
          </label>
          <input
            type="text"
            name="brewers_tips"
            value={beerObj.brewers_tips}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>Attenuation Level</strong>
          </label>
          <input
            type="number"
            name="attenuation_level"
            value={beerObj.attenuation_level}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>
            <strong>Contributed By</strong>
          </label>
          <input
            type="text"
            name="contributed_by"
            value={beerObj.contributed_by}
            onChange={handleChange}
          />
        </p>
        <button>Create New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
