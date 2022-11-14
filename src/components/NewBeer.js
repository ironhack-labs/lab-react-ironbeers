import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";

function NewBeer() {    
  const defaultState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };
  const [newBeer, setNewBeer] = useState(defaultState);
  const navigate = useNavigate();

  function handleChange(e) {
    setNewBeer((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
        .post(BASE_URL + "beers/new", newBeer)
        .then((response) => {
            setNewBeer(defaultState);
            navigate("/beers");
        });
  }

  useEffect(() => console.log(newBeer), [newBeer])

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={newBeer.name} onChange={handleChange} />
        </label>
        <br />  
        <label>
          Tagline:
          <input
            name="tagline"
            value={newBeer.tagline}
            onChange={handleChange}
          />
        </label>
        <br />  
        <label>
          Description:
          <input
            name="description"
            value={newBeer.description}
            onChange={handleChange}
          />
        </label>
        <br />  
        <label>
          First brewed:
          <input
            name="first_brewed"
            value={newBeer.first_brewed}
            onChange={handleChange}
          />
        </label>
        <br />  
        <label>          
          Brewer's tips:
          <input
            name="brewers_tips"
            value={newBeer.brewers_tips}
            onChange={handleChange}
          />
        </label>
        <br />  
        <label>
          Attenuation level:
          <input
            type="number"
            min="0"
            name="attenuation_level"
            value={newBeer.attenuation_level}
            onChange={handleChange}
          />
        </label>
        <br />  
        <label>
          Contributed by:
          <input
            name="contributed_by"
            value={newBeer.contributed_by}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
