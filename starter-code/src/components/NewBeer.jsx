import React, { Component } from "react";
import axios from "axios";
export default class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }
  componentDidMount() {
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new");
  }

  render() {
    return (
      <div>
        <form
          action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="post"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="name"
              class="input100"
            />
          </div>

          <div>
            <input
              type="text"
              name="tagline"
              placeholder="tagline"
              class="input100"
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="description"
              class="input100"
            />
          </div>
          <div>
            <input
              type="text"
              name="first_brewed"
              placeholder="first_brewed"
              class="input100"
            />
          </div>
          <div>
            <input
              type="text"
              name="brewers_tips"
              placeholder="brewers_tips"
              class="input100"
            />
          </div>
          <div>
            <input
              type="number"
              name="attenuation_level"
              placeholder="attenuation_level"
              class="input100"
            />
          </div>

          <div>
            <input
              type="text"
              name="contributed_by"
              placeholder="contributed_by"
              class="input100"
            />
          </div>

          <div>
            <button type="submit">
              <p>Submit Beer</p>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
