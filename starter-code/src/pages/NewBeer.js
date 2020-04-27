import React, {Component} from 'react';
import Header from "../components/Header";
import FormAddBeer from "../components/FormAddBeer";

class NewBeer extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FormAddBeer/>
      </div>
    );
  }
}

export default NewBeer;