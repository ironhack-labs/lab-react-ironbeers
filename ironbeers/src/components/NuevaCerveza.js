import React, { Component } from "react";
import axios from 'axios'

export default class NuevaCerveza extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      tagline: undefined,
      image_url: undefined,
      contributed_by: undefined,
      mensaje: undefined
    };
  }
  changeFormData(e, key) {
    const newState = { ...this.state };
    newState[key] = e.target.value;
    newState.mensaje = ''
    this.setState(newState);
    console.log(this.state)
  }
  collectBookInfo(e) {
    e.preventDefault();

    this.setState({
        ...this.state
    }, function () {
        axios.post("localhost:5000/books/new", this.state).then(
            window.location.replace("http://localhost:3000/about")
        )
    })
}

  render() {
    return (
      <div>
          <h1>{this.state.mensaje}</h1>
        <p>
          <label>name</label>
          <input
            type="text"
            name="name"
            placeholder="write a name"
            value={this.state.name}
            onChange={e => this.changeFormData(e, "name")}
          />
        </p>
        <p>
          <label>tagline</label>
          <input
            type="text"
            name="tagline"
            placeholder="write a name"
            value={this.state.tagline}
            onChange={e => this.changeFormData(e, "tagline")}
          />
        </p>
        <p>
          <label>image_url</label>
          <input
            type="text"
            name="image_url"
            placeholder="write a image_url"
            value={this.state.image_url}
            onChange={e => this.changeFormData(e, "image_url")}
          />
        </p>
        <p>
          <label>contributed_by</label>
          <input
            type="text"
            name="contributed_by"
            placeholder="write a contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.changeFormData(e, "contributed_by")}
          />
        </p>

        <button onClick={(e) => this.collectBookInfo(e)}>Collect book info!</button>
      </div>
    );
  }
}
