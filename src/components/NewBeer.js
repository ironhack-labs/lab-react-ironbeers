import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MyCards extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAdd} id="newBeer">
        <input name="name" type="text" placeholder="Enter name" />
        <input name="tagline" type="text" placeholder="Enter tagline" />
        <input name="description" type="text" placeholder="Enter description" />
        <input
          name="first_brewed"
          type="text"
          placeholder="Enter first brewed"
        />
        <input
          name="brewers_tips"
          type="text"
          placeholder="Enter brewer tips"
        />
        <input
          name="attenuation_level"
          type="number"
          placeholder="Enter attenuation level"
        />
        <input name="contributed_by" type="text" placeholder="Enter authors" />

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
export default MyCards;
