import React from 'react';
import { createBeer } from '../../../services/api-client';
import TextArea from '../form-components/textarea/TextArea';
import NumericInput from '../form-components/numeric-input/NumericInput';
import TextInput from '../form-components/text-input/TextInput';

const validations = {
  name: (value) => value.length > 1,
  tagline: (value) => value.length > 1,
  description: (value) => value.length > 1,
  first_brewed: (value) => value.length > 1,
  brewers_tips: (value) => value.length > 1,
  attenuation_level: (value) => value.length >= 0,
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
      attenuation_level: 0,
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
    createBeer(this.state.data)
      .then((res) => console.log('New beer created', res))
      .catch((err) => console.log('Error creating new beer', err));
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
              <TextInput
                name="name"
                value={data.name}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.name}
                touch={touch.name}
              />

              <TextInput
                name="tagline"
                value={data.tagline}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.tagline}
                touch={touch.tagline}
              />

              <TextArea
                name="description"
                value={data.description}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.description}
                touch={touch.description}
              />

              <TextInput
                name="first_brewed"
                value={data.first_brewed}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.first_brewed}
                touch={touch.first_brewed}
              />

              <TextInput
                name="brewers_tips"
                value={data.brewers_tips}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.brewers_tips}
                touch={touch.brewers_tips}
              />
              <NumericInput
                name="attenuation_level"
                value={data.attenuation_level}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.attenuation_level}
                touch={touch.attenuation_level}
              />

              <TextInput
                name="contributed_by"
                value={data.contributed_by}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.contributed_by}
                touch={touch.contributed_by}
              />

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
