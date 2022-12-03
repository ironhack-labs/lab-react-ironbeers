import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
const emptyDataObj = {
  name: "",
  tagline: "",
  description: "",
  firstBrewed: "",
  brewersTips: "",
  attenuationLevel: 0,
  contributedBy: "",
};

const NewBeer = () => {
  const [data, setData] = useState(emptyDataObj);

  const handleInputData = e => {
    const { value, name, valueAsNumber } = e.target;
    setData({ ...data, [name]: valueAsNumber || value });
    console.log(data);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const body = {
      name: data.name,
      tagline: data.tagline,
      description: data.description,
      first_brewed: data.firstBrewed,
      brewers_tips: data.brewersTips,
      attenuation_level: data.attenuationLevel,
      contributed_by: data.contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(response => {
        console.log("response :", response);
        setData(emptyDataObj);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input-name">Name </label>
        <input id="input-name" type="text" name="name" value={data.name} onChange={handleInputData} />

        <label htmlFor="input-tagline">Tagline </label>
        <input id="input-tagline" type="text" name="tagline" value={data.tagline} onChange={handleInputData} />

        <label htmlFor="input-description">Description </label>
        <textarea id="input-description" type="text" name="description" rows={5} value={data.description} onChange={handleInputData} />

        <label htmlFor="input-first-brewed">First Brewed </label>
        <input id="input-first-brewed" type="text" name="firstBrewed" value={data.firstBrewed} onChange={handleInputData} />

        <label htmlFor="input-brewers-tips">Brewers Tips</label>
        <input id="input-brewers-tips" type="text" name="brewersTips" value={data.brewersTips} onChange={handleInputData} />

        <label htmlFor="input-attenuation">Attenuation Level</label>
        <input id="input-attenuation" type="number" name="attenuationLevel" value={data.attenuationLevel} onChange={handleInputData} />

        <label htmlFor="input-contributed">Contributed By</label>
        <input id="input-contributed" type="text" name="contributedBy" value={data.contributedBy} onChange={handleInputData} />

        <button>ADD NEW</button>
      </form>
    </div>
  );
};

export default NewBeer;
