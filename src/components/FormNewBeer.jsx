import React, { useEffect, useState } from "react";

import { Container } from "reactstrap";
import NewBeer from "./pages/NewBeer";

import axios from "axios";

import { Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function FormNewBeer(props) {
  const [newBeer, setNewBeer] = useState([
    { name: "name", type: "text", value: "" },
    { name: "tagline", type: "text", value: "" },
    { name: "description", type: "textarea", value: "" },
    { name: "first_brewed", type: "text", value: "" },
    { name: "brewers_tips", type: "text", value: "" },
    { name: "attenuation_level", type: "number", value: 0 },
    { name: "contributed_by", type: "text", value: "" }
  ]);

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setNewBeer(
      newBeer.map(beer =>
        beer.name === name ? { ...beer, value: value } : { ...beer }
      )
    );
  }

  let createParameters = Object.fromEntries(newBeer.map(beer => [beer.name, beer.name === "attenuation_level" ? Number(beer.value) : beer.value]))




  function handleSubmit(e) {
    e.preventDefault();
    console.log(createParameters)
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new",createParameters)
      .then(response => {
        console.log(response)
        setNewBeer([
          { name: "name", type: "text", value: "" },
          { name: "tagline", type: "text", value: "" },
          { name: "description", type: "textarea", value: "" },
          { name: "first_brewed", type: "text", value: "" },
          { name: "brewers_tips", type: "text", value: "" },
          { name: "attenuation_level", type: "number", value: 0 },
          { name: "contributed_by", type: "text", value: "" }
        ]);
      });
  }

  return (
    <div className="FormNewBeer">
      {
        // <pre>{JSON.stringify(newBeer,null,2)}</pre>
      }
      <Form className="border p-4" onSubmit={handleSubmit}>
        {newBeer.map(input => (
          <Row className="mt-3">
            <Col sm={{ size: 6, offset: 3 }}>
              <FormGroup className="text-center ">
                <Label className="text-center" for={input.name}>
                  <span className="font-weight-bold">{input.name}</span>
                </Label>
                <Input
                  className="badge-pill"
                  type={input.type}
                  name={input.name}
                  placeholder={"type in " + input.name}
                  onChange={e => handleChange(e)}
                  value={input.value}
                />
              </FormGroup>
            </Col>
          </Row>
        ))}
        <Button block>Submit</Button>
      </Form>
    </div>
  );
}
