import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class NewBeer extends React.Component {
  state = {
    newBeer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      newBeer: { ...this.state.newBeer, [name]: value },
    });
    console.log(this.state.newBeer);
  };

  addNewBeer = () => {
    this.setState({
      newBeer: {attenuation_level: +this.state.newBeer.attenuation_level },
    });
    axios
      .post(
        `https://ih-beers-api2.herokuapp.com/beers/new`, this.state.newBeer
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state.newBeer;
    return (
      <div className="NewBeer">
        <div>
          <Link to="/">&#8962;</Link>
        </div>
        <div>
          <form>
            <div>
              <strong>Name</strong>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>Tagline</strong>
              <input
                type="text"
                name="tagline"
                value={tagline}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>Description</strong>
              <input
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>First Brewed</strong>
              <input
                type="text"
                name="first_brewed"
                value={first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>Brewers Tips</strong>
              <input
                type="text"
                name="brewers_tips"
                value={brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>Attenuation Level</strong>
              <input
                type="number"
                name="attenuation_level"
                value={attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <strong>Contributed By</strong>
              <input
                type="text"
                name="contributed_by"
                value={contributed_by}
                onChange={this.handleChange}
              />
            </div>
          </form>
          <button onClick={this.addNewBeer}>ADD NEW</button>
        </div>
      </div>
    );
  }
}

export default NewBeer;
