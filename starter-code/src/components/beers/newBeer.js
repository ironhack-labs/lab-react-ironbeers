import React, { Component } from "react";


import Service from "../../service/ironBeers.service";

class BeersForm extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      beer: {
        name: "",
        description: "",
        image_url: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service
      .postBeer(this.state.beer)
      .then(x => {
        this.props.updateBeersList();
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      beer: { ...this.state.beer, [name]: value }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.beer.name}
        />

        <label>Descripción</label>
        <input
          type="text"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.beer.description}
        />

        <label>Imagen URL</label>
        <input
          type="text"
          name="image_url"
          onChange={this.handleInputChange}
          value={this.state.beer.image_url}
        />

        <button variant="dark" type="submit">
          Crear
        </button>
      </form>
    );
  }
}

export default BeersForm;
