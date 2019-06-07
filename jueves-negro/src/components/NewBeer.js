import React, { Component } from 'react';
import BeerServices from "../service/beer-services";


class NewBeer extends Component {
  constructor(props) {
    super(props);


    this.services = new BeerServices();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewer_tips: "",
      attenuation_level: 0,
      contributed_by:"",
    };
  }


  handleChange = e => {
    let { name, value, checked } = e.target;
    value = checked ? checked : value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.services
      .setNewBeer(this.state)
      .then(theBeer => alert(theBeer.data.message));
    this.setState({
          name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewer_tips: "",
      attenuation_level: 0,
      contributed_by:""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          tagline:
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          description:
          <input
            type="text"
            name="description"
            checked={this.state.description}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          first_brewed;
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          brewer_tips;
          <input
            type="text"
            name="brewer_tips"
            value={this.state.brewer_tips}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          attenuation_level;
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          contributed_by;
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <input type="submit" value="enviar" />
      </form>
    );
  }
}

export default NewBeer;
