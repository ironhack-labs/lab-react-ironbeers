import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {

  const [inputs, setInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 1,
    contributed_by: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const beerDetails = {
      name: inputs.name,
      tagline: inputs.tagline,
      description: inputs.description,
      first_brewed: inputs.first_brewed,
      brewers_tips: inputs.brewers_tips,
      attenuation_level: inputs.attenuation_level,
      contributed_by: inputs.contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerDetails)
      .then((response) => {
        navigate(`/beers/${response.data._id}`);
      })
      .catch((err) => {
        console.log("error creating new beer...", err);
      });
  };

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="NewBeer">
        <NavBar />

        <form onSubmit={handleSubmit}>
          <label>
            Beer name:
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Tagline:
            <input
              type="text"
              name="tagline"
              value={inputs.tagline}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Description:
            <input
              type="text"
              name="description"
              value={inputs.description}
              onChange={handleInputChange}
            />
          </label>

           <label>
            First brewed:
            <input
              type="text"
              name="first_brewed"
              value={inputs.first_brewed}
              onChange={handleInputChange}
            />
          </label>

           <label>
            Brewer's tips:
            <input
              type="text"
              name="brewers_tips"
              value={inputs.brewers_tips}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Attenuation level:
            <input
              type="text"
              name="attenuation_level"
              value={inputs.attenuation_level}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Contributed by:
            <input
              type="text"
              name="contributed_by"
              value={inputs.contributed_by}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add new beer</button>
        </form>
      </div>
    </>
  );
}
