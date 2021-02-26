import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState(() => ({[name]: value}));
  }

  async formSubmitHandler(event) {
      event.preventDefault();
      let {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
      attenuation_level = Number(attenuation_level);
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by});
  }

  render() {
    return (
      <form className="text-left mx-3 newbeer-form" onSubmit={this.formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
            value={this.state.tagline}
            onChange={this.onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="5"
            value={this.state.description}
            onChange={this.onChangeHandler}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewers_tips">First Tips</label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.onChangeHandler}
          />
        </div>
        <button className="btn btn-primary w-100">
          ADD NEW
        </button>
      </form>
    );
  }
}

export default NewBeer;
