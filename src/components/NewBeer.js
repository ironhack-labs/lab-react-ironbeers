import React, { Component, Fragment } from "react";

class NewBeer extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <form
          action="https://ih-beer-api.herokuapp.com/beers/new"
          method="POST"
        >
          <div>
            <label>
              <b>Name</b>
            </label>
            <br />
            <input type="text" name="name" />
          </div>
          <br />
          <div>
            <label>
              <b>Tagline</b>
            </label>
            <br />
            <input type="text" name="tagline" />
          </div>
          <br />
          <div>
            <label>
              <b>Description</b>
            </label>
            <br />
            <input type="text" name="description" />
          </div>
          <br />
          <div>
            <label>
              <b>First Brewed</b>
            </label>
            <br />
            <input type="text" name="first_brewed" />
          </div>
          <br />
          <div>
            <label>
              <b>Brewsers Tips</b>
            </label>
            <br />
            <input type="text" name="brewers_tips" />
          </div>
          <br />
          <div>
            <label>
              <b>Attenuation Level</b>
            </label>
            <br />
            <input type="number" name="attenuation_level" />
          </div>
          <br />
          <div>
            <label>
              <b>Contributed By</b>
            </label>
            <br />
            <input type="text" name="contributed_by" />
          </div>
          <br />
          <button type="submit">ADD NEW</button>
        </form>
      </Fragment>
    );
  }
}

export default NewBeer;
