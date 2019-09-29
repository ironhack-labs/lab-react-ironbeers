import React, { Component } from "react";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.name = null;
    this.state.tagline = null;
    this.state.description = null;
    this.state.first_brewed = null;
    this.state.brewers_tips = null;
    this.state.attenuation_level = null;
    this.state.contributed_by = null;
    this.submitForm = this.submitForm.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeTagline = this.changeTagline.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeBrewed = this.changeBrewed.bind(this);
    this.changeTips = this.changeTips.bind(this);
    this.changeAttenuation = this.changeAttenuation.bind(this);
    this.changeContributor = this.changeContributor.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    this.props.submitter(this.state);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeTagline(event) {
    this.setState({ tagline: event.target.value });
  }

  changeDesc(event) {
    this.setState({ description: event.target.value });
  }

  changeBrewed(event) {
    this.setState({ first_brewed: event.target.value });
  }

  changeTips(event) {
    this.setState({ brewers_tips: event.target.value });
  }

  changeAttenuation(event) {
    this.setState({ attenuation_level: event.target.valueAsNumber });
  }

  changeContributor(event) {
    this.setState({ contributed_by: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="beer-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="beer-name"
              onChange={this.changeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-tagline">Tagline</label>
            <input
              type="text"
              className="form-control"
              id="beer-tagline"
              onChange={this.changeTagline}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-desc">Description</label>
            <textarea
              className="form-control"
              id="beer-desc"
              onChange={this.changeDesc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-brewed">First brewed</label>
            <input
              type="text"
              className="form-control"
              id="beer-brewed"
              onChange={this.changeBrewed}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-tips">Brewer's tips</label>
            <input
              type="text"
              className="form-control"
              id="beer-tips"
              onChange={this.changeTips}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-attenuation">Attenuation level</label>
            <input
              type="number"
              className="form-control"
              id="beer-attenuation"
              onChange={this.changeAttenuation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="beer-contributor">Contributed by</label>
            <input
              type="text"
              className="form-control"
              id="beer-contributor"
              onChange={this.changeContributor}
            />
          </div>
          <button action="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
