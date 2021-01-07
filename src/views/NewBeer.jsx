import React, { Component } from 'react';
import Header from '../components/Header';
import FormBeer from '../components/FormBeer';

export class NewBeer extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormBeer />
      </div>
    );
  }
}

export default NewBeer;
