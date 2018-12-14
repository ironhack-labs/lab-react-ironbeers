import React, { Component } from "react";
import { newBeer } from "../../services/ApiBeers";

class NewBeer extends Component {
  state = {
    beer: {}
  };

  handleSubmit = e => {
    const { beer } = this.state;
    e.preventDefault();
    newBeer(beer)
      .then(newBeer => {
        console.log(newBeer);
        this.props.history.push("/all");
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    const { beer } = this.state;
    beer[e.target.name] = e.target.value;
    this.setState({ beer });
  };

  render() {
    const { handleSubmit, handleInput } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline</label>
            <input
              onChange={handleInput}
              type="text"
              name="tagline"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={handleInput}
              type="text"
              name="description"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              onChange={handleInput}
              type="text"
              name="first_brewed"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="brewers_tips">Brewer Tips</label>
            <input
              onChange={handleInput}
              type="text"
              name="brewers_tips"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="attenuation_level">Atenuation level</label>
            <input
              onChange={handleInput}
              type="number"
              name="attenuation_level"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed by</label>
            <input
              onChange={handleInput}
              type="text"
              name="contributed_by"
              className="form-control"
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewBeer;
