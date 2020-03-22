import React, { useState } from "react";
import styled from "styled-components";
import { createBeer } from "../lib/BeersApi";

const Form = styled.form`
  padding-top: 50px;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid lightgray;
`;

const Btn = styled.button`
  display: block;
  padding: 10px;
  margin: auto;
  border-radius: 50px;
  background-color: blueviolet;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const NewBeer = () => {
  const [state, setState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

  const handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const beerData = { ...state };
    beerData.attenuation_level = Number(beerData.attenuation_level);
    createBeer(beerData).then(beer => console.log(beer));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
        />
        <Input
          name="tagline"
          placeholder="Tagline"
          value={state.tagline}
          onChange={handleInputChange}
        />
        <Input
          name="description"
          type="text"
          placeholder="Description"
          value={state.description}
          onChange={handleInputChange}
        />
        <Input
          name="first_brewed"
          placeholder="First Brewed"
          value={state.first_brewed}
          onChange={handleInputChange}
        />
        <Input
          name="brewers_tips"
          placeholder="First Brewers tips"
          value={state.brewers_tips}
          onChange={handleInputChange}
        />
        <Input
          name="attenuation_level"
          placeholder="Attenuation level"
          value={state.attenuation_level}
          onChange={handleInputChange}
        />
        <Input
          name="contributed_by"
          placeholder="Contributed by"
          value={state.contributed_by}
          onChange={handleInputChange}
        />
        <Btn type="submit">Submit</Btn>                        
      </Form>
    </>
  );
};

export default NewBeer;
