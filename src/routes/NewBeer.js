import { useState } from "react";

import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    image_url: "",
  });

  const changeHandler = (event) => {
    setDetails((prevDetails) => {
      return { ...prevDetails, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(details);
    axios
      .post(process.env.REACT_APP_API + "/new", details)
      .then((response) => {
        console.log(response);
        navigate("/beers");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header />
      <section className="NewBeer mt-12">
        <h2 className="text-xl font-semibold mb-1">Add a new beer:</h2>
        <form
          className="grid"
          onSubmit={(event) => {
            submitHandler(event);
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={details.name}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            name="tagline"
            value={details.tagline}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="description">How does it taste?</label>
          <textarea
            name="description"
            value={details.description}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="first_brewed">When was it first brewed?</label>
          <input
            name="first_brewed"
            value={details.first_brewed}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="brewers_tips">Brewer’s Tipps:</label>
          <input
            name="brewers_tips"
            value={details.brewers_tips}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            name="attenuation_level"
            value={details.attenuation_level}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="number"
          />
          <label htmlFor="contributed_by">Brewed by?</label>
          <input
            name="contributed_by"
            value={details.contributed_by}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <label htmlFor="image_url">Image URL</label>
          <input
            name="image_url"
            value={details.image_url}
            onChange={(event) => {
              changeHandler(event);
            }}
            type="text"
          />
          <button
            className="py-2 px-4 mt-4 bg-gray-500 text-gray-50 rounded font-semibold text-sm uppercase tracking-wide inline-block right-4 absolute"
            type="submit"
          >
            Add new Beer
          </button>
        </form>
      </section>
    </>
  );
};

export default NewBeer;
