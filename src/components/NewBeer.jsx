import React from 'react';
import { setNewBeer } from '../services/api-client';
import Input from './layaout/Input';

const validations = {
  name: (value) => value.length > 1,
  tagline: (value) => value.length > 1,
  description: (value) => value.length > 1,
  first_brewed: (value) => value.length > 1,
  brewers_tips: (value) => value.length > 1,
  attenuation_level: (value) => typeof value === 'number',
  contributed_by: (value) => value.length > 1,
};

class NewBeer extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setNewBeer().then((response) => {
      console.log(response);
    });
  };

  render() {
    const { data, error, touch } = this.state;
    const isError = Object.values(error).some((err) => err);

    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              {console.log(error[{}])}
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                error={error[data.name]}
                touch={touch[data.name]}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isError}
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-4">
            <label>State</label>
            <pre>{JSON.stringify(this.state, null, ' ')}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;
