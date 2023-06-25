import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttentuationLevel] = useState("");
  const [contributed_by, setContributed_By] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    createBeer(newBeer);
  };

  const createBeer = (newBeer) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/beers/new`, newBeer)

      .then((response) => {
        console.log(response.data);
        navigate("/beers");
      })
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <Header />
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="enter name of beer"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Tagline
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
          </label>
        </p>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <p>
          <label>
            First Brewed
            <input
              type="text"
              name="first_brewed"
              value={first_brewed}
              onChange={(e) => {
                setFirst_Brewed(e.target.value);
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Brewer's tips
            <input
              type="text"
              name="brewers_tips"
              value={brewers_tips}
              onChange={(e) => {
                setBrewers_Tips(e.target.value);
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Attentuation Level
            <input
              type="number"
              name="attentuation_level"
              value={attenuation_level}
              onChange={(e) => {
                setAttentuationLevel(e.target.value);
              }}
            />
          </label>
        </p>

        <p>
          <label>
            Contributed by
            <input
              type="text"
              name="contributed_by"
              value={contributed_by}
              onChange={(e) => {
                setContributed_By(e.target.value);
              }}
            />
          </label>
        </p>

        <button onClick={createBeer}>Create</button>
      </form>
    </section>
  );
}

export default NewBeer;
