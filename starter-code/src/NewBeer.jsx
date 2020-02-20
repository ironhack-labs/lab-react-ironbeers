import React, { Component } from 'react';
import Axios from 'axios';


class NewBeer extends Component {

    state = {
    }
    
    addNewBeer = (e) => {
        console.log(`hitting the spot?`)
        e.preventDefault();
        Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    
    }

    handleInput = (e) => {
        console.log('value is', e.target.value)
        console.log('name is', e.target.name)
        this.setState({ [e.target.name] : e.target.value })
    }



    render() {
        return (
          <div className="container" style={{ paddingTop: "20px" }}>
            <h2>Create a New Beer!</h2>
            <p>
              Fill out the form below to submit your new beer to the brewski
              almanac.
            </p>
            <hr />
            <form
              onSubmit={this.addNewBeer}
              style={{ paddingBottom: "10px" }}
            >
              <div className="form-group">
                <label name="name">Beer Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="tagline">Tagline:</label>
                <input
                  type="text"
                  name="tagline"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="description">Description:</label>
                <textarea
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="first_brewed">First Brewed: (Date)</label>
                <input
                  type="text"
                  name="first_brewed"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="brew_tips">Brew Tip(s):</label>
                <textarea
                  type="text"
                  name="brew_tips"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="attenuation_level">Attenuation Level:</label>
                <input
                  type="number"
                  name="attenuation_level"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label name="contributed_by">Contributor(s):</label>
                <input
                  type="text"
                  name="contributed_by"
                  className="form-control"
                  onChange={this.handleInput}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success"
              />
            </form>
          </div>
        );
    }
}

export default NewBeer;