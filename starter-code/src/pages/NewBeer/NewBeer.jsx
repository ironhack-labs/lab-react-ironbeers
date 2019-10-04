import React, { Component } from "react";
import NewBeerForm from "./../../components/NewBeerForm/NewBeerForm";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router'

class NewBeer extends Component {createBeer(formData) {
    axios.post("http://localhost:5000/new", formData).then(beerAdded => {
      this.props.history.push(`/view/${beerAdded.data._id}`)
    });
  }

  render() {
    return (
      <div>
        <h1>Create your own beer</h1>
        <NewBeerForm createBeer={formData => this.createBeer(formData)} />
      </div>
    );
  }
}

export default withRouter(NewBeer)