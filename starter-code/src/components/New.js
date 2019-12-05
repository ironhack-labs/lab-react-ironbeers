import React, { Component } from "react"
import Service from "../service/Beers.service";
import { Link } from "react-router-dom";


class New extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service
      .postBeer(this.state)
      .then(x => alert('You have add a new Beer, press "Back" to Go in Beers View'))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <br />
          <br />
          <label>Tagline </label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleInputChange}
            value={this.state.tagline}
          />
          <br />
          <br />
          <label>Description </label>
          <input
            type="text"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.description}
          />
          <br />
          <br />
          <label>First Brewed </label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleInputChange}
            value={this.state.first_brewed}
          />
          <br />
          <br />
          <label>Brewers Tips </label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleInputChange}
            value={this.state.brewers_tips}
          />
          <br />
          <br />
          <label>Attenuation Level </label>
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleInputChange}
            value={this.state.attenuation_level}
          />
          <br />
          <br />
          <label>Contributed by </label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleInputChange}
            value={this.state.contributed_by}
          />
          <br />
          <br />

          <button type="submit">Add New Beer</button>
          <br />
          <br />
          <Link to="/Beers">Atras</Link>
        </form>
      </>
    );
  }
};

export default New;