import React from 'react';
import axios from 'axios';
import Header from './Header';
// import Input from './Input';

class NewBeer extends React.Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: null,
      contributed_by: '',
    },
    response: {
      error: null,
    },
  };

  handleChange = (event) => {
    var data = { ...this.state.data };
    data[event.target.name] = event.target.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBeer = {
      name: this.state.data.name,
      tagline: this.state.data.tagline,
      description: this.state.data.description,
      first_brewed: this.state.data.first_brewed,
      brewers_tips: this.state.data.brewers_tips,
      attenuation_level: parseFloat(this.state.data.attenuation_level),
      contributed_by: this.state.data.contributed_by,
    };
    console.log(newBeer);

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', 
        newBeer
      )
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        var response = { ...this.state.response };
        response.error = err;
        console.log(err)

        this.setState({ response });
      });
  };

  render() {
    return (
      <div className="container-fluid mt-4">
        <Header />
        <h2>New Beer</h2>
        {this.state.response.error && (
          <div className="alert alert-danger" role="alert">
            Something went wrong!!!
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Tagline
              <input
                className="form-control"
                type="text"
                name="tagline"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Description
              <input
                className="form-control"
                type="text"
                name="description"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              First brewed
              <input
                className="form-control"
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Brewers tips
              <input
                className="form-control"
                type="text"
                name="brewers_tips"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Attenuation level
              <input
                className="form-control"
                type="number"
                name="attenuation_level"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Contributed by
              <input
                className="form-control"
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
              />
            </label>
          </div>
          {/* <Input
            className="form-control"
            placeholder="0"
            name="alcohol"
            label="Insert Alcohol Degrees"
          /> */}

          <button type="submit">Send</button>
        </form>


      </div>
    );
  }
}

export default NewBeer;
