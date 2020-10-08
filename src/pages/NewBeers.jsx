import React from 'react';
import apiHandler from '../apiHandler';
import '../styles/NewBeers.css';
import NavMain from '../components/NavMain';

class NewBeers extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .createOne({
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => console.log('Success:', response))
      .catch((error) => console.error('Error:', error));
  };

  render() {
    console.log('toto');
    return (
      <div className="NewBeers">
        <NavMain />
        <form className="Form" onSubmit={this.handleSubmit}>
          <h2 className="title">Add a Beer</h2>

          <label className="label" htmlFor="name">
            Beer Name:
          </label>
          <input
            onChange={this.handleChange}
            // value={this.state.name}
            id="name"
            autoComplete="off"
            className="input"
            type="text"
            name="name"
          />

          <label className="label" htmlFor="tagline">
            Beer Tagline:
          </label>
          <input
            id="tagline"
            autoComplete="off"
            className="input"
            type="text"
            name="tagline"
            // value={this.state.tagline}
            onChange={this.handleChange}
            // onChange={this.handleProfileImage}
          />

          <label className="label" htmlFor="description">
            Beer Description:
          </label>
          <input
            id="description"
            autoComplete="off"
            className="input"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label className="label" htmlFor="first_brewed">
            When was it first brewed?:
          </label>
          <input
            id="first_brewed"
            autoComplete="off"
            className="input"
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />

          <label className="label" htmlFor="attenuation_level">
            What is it's attenuation level?:
          </label>
          <input
            id="attenuation_level"
            autoComplete="off"
            className="input"
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />

          <label className="label" htmlFor="contributed_by">
            By whom?:
          </label>
          <input
            id="contributed_by"
            autoComplete="off"
            className="input"
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />

          <button className="button">ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeers;
