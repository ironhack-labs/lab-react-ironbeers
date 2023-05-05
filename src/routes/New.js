import { useState } from "react";
import Header from "../Header";
import axios from "axios";

function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then((response) => {
        console.log(response.data); // success message
        setForm({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: "",
        });
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={form.tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="first_brewed">First brewed:</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={form.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={form.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={form.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={form.contributed_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewBeer;
