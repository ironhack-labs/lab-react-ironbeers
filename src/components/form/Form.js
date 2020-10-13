import React from 'react';

const validations = {
  name: (value) => value.length > 1,
  tagline: (value) => value.length > 1,
  description: (value) => value.length > 1,
  first_brewed: (value) => value.length > 1,
  brewers_tips: (value) => value.length > 1,
  attenuation_level: (value) => value.length > 1,
  contributed_by: (value) => value.length > 1,
};

class Form extends React.Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    },
    error: {
      name: true,
      tagline: true,
      description: true,
      first_brewed: true,
      brewers_tips: true,
      attenuation_level: true,
      contributed_by: true,
    },
    touch: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const validationFn = validations[name];
    const isValid = validationFn(value);

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
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">name</label>

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

                <div className="invalid-feedback">name is wrong</div>
              </div>

              <div className="form-group">
                <label htmlFor="tagline">tagline</label>

                <input
                  name="tagline"
                  value={data.tagline}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  type="text"
                  className={`form-control ${
                    touch.tagline && error.tagline ? 'is-invalid' : ''
                  }`}
                  placeholder="Enter tagline"
                />

                <div className="invalid-feedback">error</div>
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

                <div className="invalid-feedback">error</div>
              </div>

              <div className="form-group">
                <label htmlFor="first_brewed">first_brewed</label>

                <input
                  name="first_brewed"
                  value={data.first_brewed}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter first_brewed"
                  className={`form-control ${
                    touch.first_brewed && error.first_brewed ? 'is-invalid' : ''
                  }`}
                />

                <div className="invalid-feedback">error</div>
              </div>

              <div className="form-group">
                <label htmlFor="brewers_tips">brewers_tips</label>

                <input
                  value={data.brewers_tips}
                  onBlur={this.handleBlur}
                  name="brewers_tips"
                  onChange={this.handleChange}
                  type="text"
                  className={`form-control ${
                    touch.brewers_tips && error.brewers_tips ? 'is-invalid' : ''
                  }`}
                  placeholder="Enter brewers_tips"
                />

                <div className="invalid-feedback">error</div>
              </div>

              <div className="form-group">
                <label htmlFor="attenuation_level">attenuation_level</label>

                <input
                  value={data.attenuation_level}
                  onBlur={this.handleBlur}
                  name="attenuation_level"
                  type="text"
                  onChange={this.handleChange}
                  className={`form-control ${
                    touch.attenuation_level && error.attenuation_level
                      ? 'is-invalid'
                      : ''
                  }`}
                  placeholder="Enter attenuation_level"
                />

                <div className="invalid-feedback">error</div>
              </div>

              <div className="form-group">
                <label htmlFor="contributed_by">contributed_by</label>

                <input
                  name="contributed_by"
                  value={data.contributed_by}
                  onBlur={this.handleBlur}
                  type="text"
                  onChange={this.handleChange}
                  className={`form-control ${
                    touch.contributed_by && error.contributed_by
                      ? 'is-invalid'
                      : ''
                  }`}
                  placeholder="Enter contributed_by"
                />

                <div className="invalid-feedback">error</div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isError}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col">
          <label>State</label>

          <pre>{JSON.stringify(this.state, null, ' ')}</pre>
        </div>
      </div>
    );
  }
}

export default Form;
