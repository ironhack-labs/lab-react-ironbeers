import React, { useState, useContext } from "react";
import BeerFormItem from "../components/BeerFormItem";
import Section from "../layouts/Section";
import { addBeer, FormContext } from "../api/beer.api";

const NewBeer = () => {
  const { state } = useContext(FormContext);
  const handleSubmit = e => {
    e.preventDefault();
    const data = { ...state };
    addBeer(data);
  };

  return (
    <Section url={"/"}>
      <form onSubmit={e => handleSubmit(e)} className="mx-5 my-3">
        <BeerFormItem title="Name" id="name" type="text" />
        <BeerFormItem title="Tagline" id="tagLine" type="text" />
        <BeerFormItem title="Description" id="description" type="text" row={3} />
        <BeerFormItem title="First Brewed" id="first_brewed" type="text" />
        <BeerFormItem title="Brewers Tips" id="brewers_tips" type="text" />
        <BeerFormItem title="Attenuation Level" id="attenuation_level" type="number" />
        <BeerFormItem title="Contributed By" id="contributed_by" type="text" />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Submit
        </button>
      </form>
    </Section>
  );
};

export default NewBeer;
