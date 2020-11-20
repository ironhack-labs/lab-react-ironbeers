import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Header from './Header';
import { Button } from 'react-bootstrap';

export default function NewBeer(props) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <form className="new-form" onSubmit={props.onAdd}>
        <input
          className="field"
          name="name"
          type="text"
          placeholder=" enter the name of your beer"
        ></input>
        <input
          className="field"
          name="tagline"
          type="text"
          placeholder=" enter a tagline"
        ></input>
        <input
          className="field"
          name="description"
          type="text"
          placeholder=" enter a description"
        ></input>
        <input
          className="field"
          name="first_brewed"
          type="text"
          placeholder=" enter when first brewed -mm/yyyy"
        ></input>
        <input
          className="field"
          name="brewers_tips"
          type="text"
          placeholder=" enter brewers tips"
        ></input>
        <input
          className="field"
          name="attenuation_level"
          type="number"
          placeholder=" enter attenuation level (whatever that is!)"
        ></input>
        <input
          className="field"
          name="contributed_by"
          type="text"
          placeholder=" enter your name (contributor)"
        ></input>
        <Button type="submit">Add your beer!</Button>
      </form>
    </div>
  );
}
