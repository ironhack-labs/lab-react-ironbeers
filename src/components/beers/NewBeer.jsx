import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewBeer } from "../../services/beersAPI";

const initialState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: 0,
  contributed_by: "",
};

function NewBeer() {
  const [newBeer, setNewBeer] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setNewBeer((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postNewBeer(newBeer)
      .then((res) => {
        console.log(res);
        navigate("/beers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          required
          placeholder="What is the name of the beer?"
          value={newBeer.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="tagline">
        Tagline
        <input
          type="text"
          id="tagline"
          required
          placeholder="What is the tagline?"
          value={newBeer.tagline}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        Description
        <textarea
          id="description"
          required
          placeholder="What is its description?"
          value={newBeer.description}
          onChange={handleChange}
          cols="30"
          rows="5"
        ></textarea>
      </label>

      <label htmlFor="first_brewed">
        First brewed
        <input
          type="text"
          id="first_brewed"
          required
          placeholder="When was it first brewed?"
          value={newBeer.first_brewed}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="brewers_tips">
        Brewers tips
        <input
          type="text"
          id="brewers_tips"
          required
          placeholder="What is your best brewing tips?"
          value={newBeer.brewers_tips}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="attenuation_level">
        Attenuation level
        <input
          type="number"
          id="attenuation_level"
          required
          value={newBeer.attenuation_level}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="contributed_by">
        Contributed by
        <input
          type="text"
          id="contributed_by"
          required
          placeholder="Who created this beer?"
          value={newBeer.contributed_by}
          onChange={handleChange}
        />
      </label>

      <button>Add New</button>
    </form>
  );
}

export default NewBeer;
