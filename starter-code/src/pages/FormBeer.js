import React, { useReducer, useState } from "react";
import FormGroup from "../components/UI/FormGroup";
import Label from "../components/UI/Label";
import Navbar from "../components/Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const MODIFY_INPUT = "MODIFY_INPUT";

const initialState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: "",
  contributed_by: ""
};

function reducer(state, action) {
  if (action.type === MODIFY_INPUT) {
    return {
      ...state,
      [action.field]: action.value
    };
  } else {
    return state;
  }
}

const NewBeerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = state;

    const createBeer = async beer => {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beer
      );
      return response.data;
    };
    createBeer(state).then(beer => console.log(beer));
  }

  function handleChangeInput(event) {
    dispatch({
      type: MODIFY_INPUT,
      field: event.target.name,
      value: event.target.value
    });
  }

  return (
    <>
      <Navbar />
      <div
        className="rounded-bottom"
        style={{
          border: "2px solid #d3d3d3",
          width: "24rem",
          padding: "15px",
          display: "flex",
          textAlign: "center"
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Tagline</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="tagline"
              type="text"
              value={state.tagline}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <textarea
              style={{ width: "22rem" }}
              className="rounded"
              name="description"
              value={state.description}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>First Brewed</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="first_brewed"
              type="text"
              value={state.first_brewed}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Brewed Tips:</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="brewers_tips"
              type="text"
              value={state.brewers_tips}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Attenuation Level</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="attenuation_level"
              type="number"
              value={state.attenuation_level}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Contributed By</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="contributed_by"
              type="text"
              value={state.contributed_by}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <input
            className="btn btn-secondary"
            style={{ textAlign: "center" }}
            type="submit"
            value="Add New Beer"
          />
        </form>
      </div>
    </>
  );
};

export default NewBeerForm;
