import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

import './BeerForm.css';

function BeerForm() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewerTips, setBrewerTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [createdBy, setCreatedBy] = useState('');

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTipsInput = (e) => setBrewerTips(e.target.value);
  const handleAttenuationInput = (e) => setAttenuationLevel(e.target.value);
  const handleCreatedByInput = (e) => setCreatedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: createdBy,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then(function (response) {
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewerTips('');
        setAttenuationLevel('');
        setCreatedBy('');
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="basicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={handleNameInput} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicTagline">
        <Form.Label>Tagline</Form.Label>
        <Form.Control
          type="text"
          value={tagline}
          onChange={handleTaglineInput}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicTextarea">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={handleDescriptionInput}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicBrewed">
        <Form.Label>First brewed</Form.Label>
        <Form.Control
          type="text"
          value={firstBrewed}
          onChange={handleFirstBrewedInput}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicTips">
        <Form.Label>Brewer tips</Form.Label>
        <Form.Control
          type="text"
          value={brewerTips}
          onChange={handleBrewerTipsInput}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicAttenuation">
        <Form.Label>Attenuation level</Form.Label>
        <Form.Control
          type="number"
          value={attenuationLevel}
          onChange={handleAttenuationInput}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="basicContributed">
        <Form.Label>Created by</Form.Label>
        <Form.Control
          type="text"
          value={createdBy}
          onChange={handleCreatedByInput}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BeerForm;
