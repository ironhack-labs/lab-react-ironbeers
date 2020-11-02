/*
 * Setup.
 */
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

/*
 * Main.
 */
function NewBeer(props) {
  const postBeer = (e) => {
    const data = {
      name: e.target[0].value,
      tagline: e.target[1].value,
      description: e.target[2].value,
      first_brewed: e.target[3].value,
      brewers_tips: e.target[4].value,
      attenuation_level: e.target[5].value,
      contributed_by: e.target[6].value,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then(() => {
        props.history.push("/");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        postBeer(e);
      }}
    >
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Tagline</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>First brewed</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Brewer tips</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Attenuation level</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Contributed by</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default withRouter(NewBeer);
