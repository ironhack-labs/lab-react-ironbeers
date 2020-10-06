import React from 'react';
import { addNewBeer } from '../services/IronBeersAPI';
import { Redirect } from 'react-router-dom';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: ' ',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    isFormSubmitted: false,
  };

  getNewBeer = (data) => {
    addNewBeer(data)
      .then((addResp) => {
        this.setState({ isFormSubmitted: true });
      })
      .catch((error) => console.log(error));
  };

  handleSubmit = (evt, data) => {
    evt.preventDefault();
    console.log(this.state);
    this.getNewBeer(this.state);
  };

  handleTextEntered = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render = () => {
    if (this.state.isFormSubmitted) return <Redirect to="/beers" />;

    const newBeerForm = (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleTextEntered}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              className="form-control"
              placeholder="Enter tagline"
              value={this.state.tagline}
              onChange={this.handleTextEntered}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="5"
              value={this.state.description}
              onChange={this.handleTextEntered}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              value={this.state.first_brewed}
              name="first_brewed"
              className="form-control"
              placeholder="Enter First Brewed"
              onChange={this.handleTextEntered}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              value={this.state.brewers_tips}
              name="brewers_tips"
              onChange={this.handleTextEntered}
              className="form-control"
              placeholder="Enter Brewers Tips"
            />
          </div>

          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level </label>
            <input
              type="number"
              value={this.state.attenuation_level}
              name="attenuation_level"
              className="form-control"
              placeholder="Enter Attenuation Level "
              onChange={this.handleTextEntered}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">Contributed By </label>
            <input
              type="text"
              value={this.state.contributed_by}
              name="contributed_by"
              onChange={this.handleTextEntered}
              className="form-control"
              placeholder="Enter Contributed By"
            />
          </div>
          <button className="btn btn-primary btn-block w-25">ADD NEW</button>
        </form>
      </div>
    );
    return newBeerForm;
  };
}

export default NewBeer;
