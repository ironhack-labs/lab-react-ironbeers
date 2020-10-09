import React from 'react';
import { createBeer } from '../services/api-client';
import Header from './Header';

const validations = {
  name: (value) => value.length > 1,
  tagline: (value) => value.length > 1,
  description: (value) => value.length > 1,
  first_brewed: (value) => value.length > 1,
  brewer_tips: (value) => value.length > 1,
  attenuation_level: (value) => value > 1,
  contributed_by: (value) => value.length > 1,
};

export default class Form extends React.Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: 1,
      contributed_by: '',
    },
    error: {
      name: true,
      tagline: true,
      description: true,
      first_brewed: true,
      brewer_tips: true,
      attenuation_level: true,
      contributed_by: true,
    },
    touch: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();

    createBeer(this.state.data).then((response) => {
      console.log(response.data);
      this.setState({
        data: {
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewer_tips: '',
          attenuation_level: 1,
          contributed_by: '',
        },
      });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const isValid = validations[name](value);
    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
      error: {
        ...this.state.error,
        [name]: !isValid,
      },
    });
  };

  handleBlur = (event) => {
    const { name } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      },
    });
  };

  render() {
    const { data, error, touch } = this.state;

    const isError = Object.values(error).some((el) => el === true);

    return (
      <div className="form">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col mt-5 mb-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    value={data.name}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="name"
                    type="text"
                    className={`form-control ${
                      touch.name && error.name ? 'is-invalid' : ''
                    }`}
                    placeholder="Enter name"
                  />

                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="tagline">Tagline</label>
                  <input
                    value={data.tagline}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="tagline"
                    type="text"
                    className={`form-control ${
                      touch.tagline && error.tagline ? 'is-invalid' : ''
                    }`}
                    placeholder="Enter tagline"
                  />

                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={data.description}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="description"
                    className={`form-control ${
                      touch.description && error.description ? 'is-invalid' : ''
                    }`}
                  ></textarea>
                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="first_brewed">First Brewed</label>
                  <input
                    value={data.first_brewed}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="first_brewed"
                    type="text"
                    className={`form-control ${
                      touch.first_brewed && error.first_brewed
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholder="First brewed on..."
                  />

                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="brewer_tips">Brewer Tips</label>
                  <input
                    value={data.brewer_tips}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="brewer_tips"
                    type="text"
                    className={`form-control ${
                      touch.brewer_tips && error.brewer_tips ? 'is-invalid' : ''
                    }`}
                    placeholder="Brewer tips"
                  />

                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="attenuation_level">Attenuation Level</label>
                  <input
                    value={data.attenuation_level}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="attenuation_level"
                    type="number"
                    className={`form-control ${
                      touch.attenuation_level && data.attenuation_level < 1
                        ? 'is-invalid'
                        : ''
                    }`}
                  />

                  <div className="invalid-feedback">Error</div>
                </div>

                <div className="form-group">
                  <label htmlFor="contributed_by">Contributed By</label>
                  <input
                    value={data.contributed_by}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="contributed_by"
                    type="text"
                    className={`form-control ${
                      touch.contributed_by && error.contributed_by
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholder="Contributed by"
                  />

                  <div className="invalid-feedback">Error</div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isError}
                >
                  ADD NEW
                </button>
              </form>
            </div>
            <div className="col-2">
              {/* <label>State</label>
              <pre>{JSON.stringify(this.state, null, ' ')}</pre> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
