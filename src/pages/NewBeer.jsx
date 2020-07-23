import React, { Component } from 'react';
import HeaderNav from '../Components/HeaderNav';
import apiHandler from '../api/apiHandler';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    apiHandler
      .postNewBeer(this.state)
      .then((apiRes) => {
        this.props.history.push('/beers');
        console.log(apiRes);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.name === 'attenuation_level'
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  render() {
    return (
      <div className="newBeer">
        <HeaderNav />
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="tagline">
              Tagline
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="tagline"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="description">
              Description
            </label>
            <div className="control">
              <input
                className="input description"
                type="text"
                name="description"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="first_brewed">
              First Brewed
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="brewer_tips">
              Brewer Tips
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="brewer_tips"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="attenuation_level">
              Attenuation level
            </label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="attenuation_level"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="contributed_by">
              Contributed by
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Add new</button>
          </div>
        </form>
      </div>
    );
  }
  // }
}

export default NewBeer;
