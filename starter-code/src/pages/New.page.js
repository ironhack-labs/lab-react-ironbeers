import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { addNewBeer } from "../../lib/beers.api";

const StyledForm = styled.div`
  padding: 15px 15px 80px 15px;
`;

export const NewPage = () => {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const data = { ...newBeer };
    addNewBeer(data).then(beer => console.log(beer));
  };

  return (
    <>
      <StyledForm>
        <h2>ADD A NEW BEER</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="beerName"
              value={newBeer.name}
              onChange={e => setNewBeer({ ...newBeer, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="tagline">Tagline</Form.Label>
            <Form.Control
              id="tagline"
              type="text"
              placeholder="beerTagline"
              value={newBeer.tagline}
              onChange={e =>
                setNewBeer({ ...newBeer, tagline: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              id="description"
              value={newBeer.description}
              onChange={e =>
                setNewBeer({ ...newBeer, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="firstBrewers">First brewers</Form.Label>
            <Form.Control
              id="firstBrewers"
              type="text"
              placeholder="First brewers"
              value={newBeer.first_brewed}
              onChange={e =>
                setNewBeer({ ...newBeer, first_brewed: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="brewersTips">Brewers tips</Form.Label>
            <Form.Control
              id="brewersTips"
              type="text"
              placeholder="Brewers tips"
              value={newBeer.brewers_tips}
              onChange={e =>
                setNewBeer({ ...newBeer, brewers_tips: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="level">Atenuation level</Form.Label>
            <Form.Control
              id="level"
              type="number"
              placeholder="Atenuation level"
              value={newBeer.attenuation_level}
              onChange={e =>
                setNewBeer({ ...newBeer, attenuation_level: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="author">Contributed by</Form.Label>
            <Form.Control
              id="author"
              type="text"
              placeholder="Contributed by"
              value={newBeer.contributed_by}
              onChange={e =>
                setNewBeer({ ...newBeer, contributed_by: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </StyledForm>
    </>
  );
};
