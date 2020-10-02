import React from 'react';
import InputWithLabel from '../components/InputWithLabel';
import TextAreaWithLabel from '../components/TextAreaWithLabel';
import NavBar from '../components/Navbar';
import { newBeer } from '../services/api-client';

export default class DetailBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Tagline: '',
      Description: '',
      FirstBrewed: '',
      BrewersTips: '',
      AttenuationLevel: 1,
      ContributedBy: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state;
    const newBeerForm = {
      name: state.Name,
      tagline: state.Tagline,
      description: state.Description,
      first_brewed: state.FirstBrewed,
      brewers_tips: state.BrewersTips,
      attenuation_level: parseInt(state.AttenuationLevel),
      contributed_by: state.ContributedBy,
    };
    newBeer(newBeerForm).then((res) => {
      alert(res.message);
      this.setState({
        Name: '',
        Tagline: '',
        Description: '',
        FirstBrewed: '',
        BrewersTips: '',
        AttenuationLevel: 1,
        ContributedBy: '',
      });
    });
  };

  handleChange = (e) => {
    e.target.name = e.target.name.replace(/ /g, '');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container mb-5 mt-5">
          <div className="col-md-7 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <InputWithLabel
                name="Name"
                value={this.state.Name}
                change={this.handleChange}
              />
              <InputWithLabel
                name="Tagline"
                value={this.state.Tagline}
                change={this.handleChange}
              />
              <TextAreaWithLabel
                name="Description"
                value={this.state.Description}
                change={this.handleChange}
              />
              <InputWithLabel
                name="First Brewed"
                value={this.state.FirstBrewed}
                change={this.handleChange}
              />
              <InputWithLabel
                name="Brewers Tips"
                value={this.state.BrewersTips}
                change={this.handleChange}
              />
              <InputWithLabel
                name="Attenuation Level"
                type="number"
                value={this.state.AttenuationLevel}
                change={this.handleChange}
              />
              <InputWithLabel
                name="Contributed By"
                value={this.state.ContributedBy}
                change={this.handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary btn-form mt-4 p-2"
              >
                ADD NEW
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
