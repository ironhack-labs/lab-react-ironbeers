import React, { useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const beersApi = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com"
  });

  function handleSubmit(event) {
    event.preventDefault();

    const data = [];
    data.push(
      { name },
      { tagline },
      { description },
      { first_brewed },
      { brewers_tips },
      { attenuation_level },
      { contributed_by }
    );

    const beerData = { ...data };
    console.log(beerData);

    const createBeer = async data => {
      console.log("dentrpo de la funcion", data);
      const response = await beersApi.post(`/beers/new`, data);
      return response.data;
    };

    // createBeer(beerData);
    createBeer(beerData).then(beer =>
      console.log("llamada a la funcion ", beer)
    );
    // console.log(
    //   `${name}, ${tagline}, ${description}, ${first_brewed}, ${brewers_tips}, ${attenuation_level}, ${contributed_by}`
    // );
  }
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeTagLine(event) {
    setTagline(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }
  function handleChangeFirstBrewed(event) {
    setFirstBrewed(event.target.value);
  }
  function handleChangeBrewersTips(event) {
    setBrewersTips(event.target.value);
  }
  function handleChangAttenuationLevel(event) {
    setAttenuationLevel(event.target.value);
  }
  function handleChangeContributedBy(event) {
    setContributedBy(event.target.value);
  }

  return (
    <div>
      <Header></Header>
      <form onSubmit={handleSubmit} className="form">
        <div className="formularyFather">
          <label className="label">Name:</label>
          <input
            className="formulary"
            type="text"
            value={name}
            onChange={handleChangeName}
          ></input>
        </div>
        <div className="formularyFather">
          <label className="label">Tagline:</label>
          <input
            className="formulary"
            type="text"
            value={tagline}
            onChange={handleChangeTagLine}
          ></input>
        </div>
        <div className="formularyFather">
          <label className="label">Description:</label>
          <textarea
            className="formulary"
            value={description}
            onChange={handleChangeDescription}
          ></textarea>
        </div>
        <div className="formularyFather">
          <label className="label">First Brewed:</label>
          <input
            className="formulary"
            type="text"
            value={first_brewed}
            onChange={handleChangeFirstBrewed}
          ></input>
        </div>
        <div className="formularyFather">
          <label className="label">Brewers Tips:</label>
          <input
            className="formulary"
            type="text"
            value={brewers_tips}
            onChange={handleChangeBrewersTips}
          ></input>
        </div>
        <div className="formularyFather">
          <label className="label">Attenuation Level:</label>
          <input
            className="formulary"
            type="number"
            value={attenuation_level}
            onChange={handleChangAttenuationLevel}
          ></input>
        </div>
        <div className="formularyFather">
          <label className="label">Contributed By:</label>
          <input
            className="formulary"
            type="text"
            value={contributed_by}
            onChange={handleChangeContributedBy}
          ></input>
        </div>
        <input className="formularyButton" type="submit" value="Enviar" />
      </form>
    </div>
  );
};
