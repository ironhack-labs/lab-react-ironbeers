import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers/",
});

function NewBeer() {
  const [form, setForm] = React.useState({});
  async function submitBeer() {
    const response = await api.post("new",form)
    console.log(response)
  }

  const changeHandler = ({ target }) => {
    setForm({...form,
      [target.name]: target.value,
    });
    console.log(form);
  };
  
  return (
    <div>
      <h1>new Beer</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitBeer();
        }}
        className="beer-form"
      >
        <label htmlFor="name">Name of the Beer</label>
        <input onChange={changeHandler} type="text" name="name"></input>
        <label htmlFor="tagline">Tagline</label>
        <input onChange={changeHandler} type="text" name="tagline"></input>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          onChange={changeHandler}
          name="description"
        ></textarea>
        <label htmlFor="first_bewed">First Brewed:</label>
        <input type="text" onChange={changeHandler} name="brewers_tips"></input>
        <label htmlFor="first_bewed">brewers_tips:</label>
        <input type="text" onChange={changeHandler} name="brewers_tips"></input>
        <label htmlFor="attenuation_level">attenuation_level:</label>
        <input
          type="number"
          onChange={changeHandler}
          name="attenuation_level"
        ></input>
        <label htmlFor="contributed_by">contributed_by:</label>
        <input
          type="text"
          onChange={changeHandler}
          name="contributed_by"
        ></input>
        <button type="submit">Submit Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;

// https://ih-beers-api2.herokuapp.com/beers/new

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text
