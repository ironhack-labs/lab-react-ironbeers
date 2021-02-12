import axios from 'axios';
import React from 'react';
import Header from './Header';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );
      console.log(response);
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="m-4 flex-column input-group">
          <label className="m-0">
            <strong>Name</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>Tagline</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="tagline"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>Description</strong>
          </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>First Brewed</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="first_brewed"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>Brewers Tips</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="brewers_tips"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>Attenuation Level</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="attenuation_level"
            type="number"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="m-4 flex-column input-group">
          <label className="align-self-start m-0">
            <strong>Contributed By</strong>
          </label>
          <input
            onChange={this.handleChange}
            name="contributed_by"
            type="text"
            className="form-control w-75 rounded"
          />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <button
          onClick={this.handleSubmit}
            style={{ margin: '0 auto' }}
            className="w-75 btn btn-primary rounded"
          >
            ADD NEW
          </button>
        </div>
      </div>
    );
  }
}

export default NewBeer;
