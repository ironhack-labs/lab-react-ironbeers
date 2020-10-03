import React from 'react';
import { setNewBeer } from '../services/api-client';
import Input from './layaout/Input';
import Textarea from './layaout/Textarea';

const validations = {
  name: (value) => value.length > 1,
  tagline: (value) => value.length > 1,
  description: (value) => value.length > 1,
  first_brewed: (value) => value.length > 1,
  brewers_tips: (value) => value.length > 1,
  attenuation_level: (value) => value.length >= 1,
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
    success: false,
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
    setNewBeer(this.state.data).then((response) => {
      response.status === 200 &&
        this.setState({
          success: true,
        });
      setTimeout(() => {
        this.props.history.push('/');
      }, 5000);
    });
  };

  render() {
    const { data, error, touch, success } = this.state;
    const isError = Object.values(error).some((err) => err);

    return (
      <div className="container py-4">
        {success ? (
          <div className="alert alert-success mt-3">
            New beer successfully saved to database!
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="name"
              value={data.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['name']}
              touch={touch['name']}
            />
            <Input
              type="text"
              name="tagline"
              value={data.tagline}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['tagline']}
              touch={touch['tagline']}
            />
            <Textarea
              name="description"
              value={data.description}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['description']}
              touch={touch['description']}
            />
            <Input
              type="text"
              name="first_brewed"
              value={data.first_brewed}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['first_brewed']}
              touch={touch['first_brewed']}
            />
            <Input
              type="text"
              name="brewers_tips"
              value={data.brewers_tips}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['brewers_tips']}
              touch={touch['brewers_tips']}
            />
            <Input
              type="number"
              name="attenuation_level"
              value={data.attenuation_level}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['attenuation_level']}
              touch={touch['attenuation_level']}
            />
            <Input
              type="text"
              name="contributed_by"
              value={data.contributed_by}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={error['contributed_by']}
              touch={touch['contributed_by']}
            />

            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              disabled={isError}
            >
              Send new beer
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default NewBeer;
