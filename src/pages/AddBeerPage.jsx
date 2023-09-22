import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate();

  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((response) => {
        console.log(response.data);
        console.log(beer);

        setBeer({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
        navigate("/beers");
      })
      .catch((error) => {
        console.log(error);
        alert("Error creating new beer.");
      });
  };

  // const inputHandler = (event) => setBeer({ ...beer, [event.target.name]: event.target.value });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setBeer({ ...beer, [name]: value });
  };
  //object value access (dot nation cannot do so [name])

  return (
    <div className="beer-add-form">
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          value={beer.name}
          name="name"
          onChange={inputHandler}
        />

        <label>Tagline </label>
        <input
          type="text"
          value={beer.tagline}
          name="tagline"
          onChange={inputHandler}
        />

        <label>Description </label>
        <textarea
          type="text"
          value={beer.description}
          name="description"
          onChange={inputHandler}
        />

        <label>First Brewed </label>
        <input
          type="text"
          value={beer.first_brewed}
          name="first_brewed"
          onChange={inputHandler}
        />

        <label>Brewers Tips </label>
        <input
          type="text"
          value={beer.brewers_tips}
          name="brewers_tips"
          onChange={inputHandler}
        />

        <label>Attenuation Level </label>
        <input
          type="number"
          value={beer.attenuation_level}
          name="attenuation_level"
          onChange={inputHandler}
        />

        <label>Contributed by </label>
        <input
          type="text"
          value={beer.contributed_by}
          name="contributed_by"
          onChange={inputHandler}
        />
         <button type="submit">Create beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
