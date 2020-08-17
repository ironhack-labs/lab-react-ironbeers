import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FetchBeers from '../helpers/fetch-beers'

const AddBeer = () => {
  const initialState = {
    form: {
      name: '',
      image_url: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    },
  };

  const [state, setState] = useState(initialState);

  const beerHelper = new FetchBeers()

  const handleOnChange = ({ target }) => {
    setState({
      form: {
        ...state.form,
        [target.name]: target.name === "attenuation_level" ? Number(target.value) : target.value,
      },
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const newBeer = {...state.form}
    createBeer(newBeer)
    setState(() => ({
      form: {
        name: '',
        image_url: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
      },
    }));
  };

  const createBeer = async beer => {
     const newBeer = await beerHelper.newBeer(beer)
     console.log(`Cerveza guardada con exito: ${newBeer}`)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.form.name}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={state.form.image_url}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Tagline</Form.Label>
          <Form.Control
            type="text"
            name="tagline"
            value={state.form.tagline}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={state.form.description}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">First Brewed</Form.Label>
          <Form.Control
            type="text"
            name="first_brewed"
            value={state.form.first_brewed}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Brewers Tips</Form.Label>
          <Form.Control
            type="text"
            name="brewers_tips"
            value={state.form.brewers_tips}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            type="number"
            inputMode="numeric"
            name="attenuation_level"
            min="0"
            max="100"
            value={state.form.attenuation_level}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contributed by</Form.Label>
          <Form.Control
            type="text"
            name="contributed_by"
            value={state.form.contributed_by}
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">ADD NEW</Button>
      </Form>
    </div>
  );
};

export default AddBeer;
