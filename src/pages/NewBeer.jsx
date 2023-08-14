import { useState } from "react";
import axios from "axios";
import baseURL from "../utils/constants";
import { useNavigate } from "react-router-dom";

const AddBeer = () => {
  const navigate = useNavigate();
  const [beerDetails, setBeerDetails] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/beers/new`, beerDetails)
      .then((response) => {
        console.log(response.data)
        navigate(`/beers`);
      })
      .catch((error) => {
        console.error("Error adding beer:", error);
      });
  };

  return (
    <div className="add-beer-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={beerDetails.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="tagline"
          value={beerDetails.tagline}
          onChange={handleChange}
          placeholder="Tagline"
        />
        <textarea
          name="description"
          value={beerDetails.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="first_brewed"
          value={beerDetails.first_brewed}
          onChange={handleChange}
          placeholder="First Brewed"
        />
        <input
          type="text"
          name="brewers_tips"
          value={beerDetails.brewers_tips}
          onChange={handleChange}
          placeholder="Brewer's Tips"
        />
        <input
          type="number"
          name="attenuation_level"
          value={beerDetails.attenuation_level}
          onChange={handleChange}
          placeholder="Attenuation Level"
        />
        <input
          type="text"
          name="contributed_by"
          value={beerDetails.contributed_by}
          onChange={handleChange}
          placeholder="Contributed By"
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeer;
