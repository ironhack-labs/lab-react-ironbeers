import axios from "axios";
import { React, useState } from "react";
import BackHome from "../components/BackHome";

function NewBeer() {
  const [submission, setSubmission] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", submission)
      .then((response) => {
        setMessage(response.data.message);
      });

    setSubmission({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  return (
    <div>
      <BackHome />
      <form onSubmit={handleSubmit}>
        <label for='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={submission.name}
          onChange={handleChange}
        />
        <br />
        <label for='tagline'>Tagline</label>
        <input
          type='text'
          name='tagline'
          id='tagline'
          value={submission.tagline}
          onChange={handleChange}
        />
        <br />
        <label for='description'>Description</label>
        <input
          type='text'
          name='description'
          id='description'
          value={submission.description}
          onChange={handleChange}
        />
        <br />
        <label for='first_brewed'>First brewed</label>
        <input
          type='text'
          name='first_brewed'
          id='first_brewed'
          value={submission.first_brewed}
          onChange={handleChange}
        />
        <br />
        <label for='brewers_tips'>Brewers tips</label>
        <input
          type='text'
          name='brewers_tips'
          id='brewers_tips'
          value={submission.brewers_tips}
          onChange={handleChange}
        />
        <br />
        <label for='attenuation_level'>Attenuation level</label>
        <input
          type='number'
          name='attenuation_level'
          id='attenuation_level'
          value={submission.attenuation_level}
          onChange={handleChange}
        />
        <br />
        <label for='contributed_by'>Contributed by</label>
        <input
          type='text'
          name='contributed_by'
          id='contributed_by'
          value={submission.contributed_by}
          onChange={handleChange}
        />
        <button type='submit'>Add new</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default NewBeer;
