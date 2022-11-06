import { Button, Form } from "react-bootstrap";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewBeer(props) {
  const [nameInput, setNameInput] = useState("");
  const [taglineInput, setTaglineInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [brewedInput, setBrewedInput] = useState("");
  const [brewersInput, setBrewersInput] = useState("");
  const [attenuationInput, setAttenuationInput] = useState(0);
  const [contritutedInput, setContritutedInput] = useState("");

  const [list, setList] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBeer = {
      name: nameInput,
      tagline: taglineInput,
      description: descriptionInput,
      first_brewed: brewedInput,
      brewers_tips: brewersInput,
      attenuation_level: attenuationInput,
      contributed_by: contritutedInput,
    };

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      getData()
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // actualizar estado
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightblue",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={"30px"} />
        </Link>
      </nav>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor='name' >Name: </Form.Label>
          <Form.Control value={nameInput} name='name' type="text" 
          onChange={(event)=>{
            setNameInput(event.target.value)
          }}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='tagline' >Tagline: </Form.Label>
          <Form.Control
            value={taglineInput}
            name='tagline'
            type="text"
            onChange={(event) => {
              setTaglineInput(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='description' >Description: </Form.Label>
          <Form.Control
            value={descriptionInput}
            type="text"
            name='description'
            style={{ height: "120px" }}
            onChange={(event) => {
              setDescriptionInput(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='first_brewed' >First Brewed: </Form.Label>
          <Form.Control
            value={brewedInput}
            type="text"
            name='first_brewed'
            onChange={(event) => {
              setBrewedInput(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='brewers_tips' >Brewers Tips: </Form.Label>
          <Form.Control
            value={brewersInput}
            type="text"
            name='brewers_tips'
            onChange={(event) => {
              setBrewersInput(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='attenuation_level' >Attenuation Level: </Form.Label>
          <Form.Control
            value={attenuationInput}
            type="number"
            name='attenuation_level'
            onChange={(event) => {
              setAttenuationInput(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='contributed_by' >Contributed By: </Form.Label>
          <Form.Control
            value={contritutedInput}
            type="text"
            name='contributed_by'
            onChange={(event) => {
              setContritutedInput(event.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          ADD NEW
        </Button>
      </Form>
    </div>
  );
}

export default NewBeer;
