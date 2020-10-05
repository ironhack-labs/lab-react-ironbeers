import React from 'react';
import InputWithLabel from '../components/InputWithLabel';
import TextAreaWithLabel from '../components/TextAreaWithLabel';
import NavBar from '../components/Navbar';
import { newBeer } from '../services/api-client';

const validations = {
  Name: (value) => value.length > 1,
  Tagline: (value) => value.length > 1,
  Description: (value) => value.length > 1,
  FirstBrewed: (value) => value.length > 1,
  BrewersTips: (value) => value.length > 1,
  AttenuationLevel: (value) => value.length > 1,
  ContributedBy: (value) => value.length > 1,
};

export default class DetailBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Name: '',
        Tagline: '',
        Description: '',
        FirstBrewed: '',
        BrewersTips: '',
        AttenuationLevel: 1,
        ContributedBy: '',
      },
      error: {
        Name: true,
        Tagline: true,
        Description: true,
        FirstBrewed: true,
        BrewersTips: true,
        AttenuationLevel: true,
        ContributedBy: true,
      },
      touch: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state.data;
    const newBeerForm = {
      name: state.Name,
      tagline: state.Tagline,
      description: state.Description,
      first_brewed: state.FirstBrewed,
      brewers_tips: state.BrewersTips,
      attenuation_level: parseInt(state.AttenuationLevel),
      contributed_by: state.ContributedBy,
    };
    newBeer(newBeerForm).then((res) => {
      alert(res.message);
      this.setState({
        data: {
          Name: '',
          Tagline: '',
          Description: '',
          FirstBrewed: '',
          BrewersTips: '',
          AttenuationLevel: 1,
          ContributedBy: '',
        },
        error: {
          Name: true,
          Tagline: true,
          Description: true,
          FirstBrewed: true,
          BrewersTips: true,
          AttenuationLevel: true,
          ContributedBy: true
        },
        touch: {},
      });
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    name = name.replace(/ /g, '');
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

  handleOnblur = (e) => {
    let { name } = e.target;
    name = name.replace(/ /g, '');

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      },
    });
  };

  render() {
    const { data, error, touch } = this.state;
    const isError = Object.values(error).some((el) => el);

    console.log(data, error, touch);
    console.log(isError);

    return (
      <div>
        <NavBar />
        <div className="container mb-5 mt-5">
          <div className="col-md-7 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <InputWithLabel
                name="Name"
                value={data.Name}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.Name && error.Name ? 'is-invalid' : 'hola'
                }`}
                errorMessage="Name is error"
              />
              <InputWithLabel
                name="Tagline"
                value={data.Tagline}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.Tagline && error.Tagline ? 'is-invalid' : ''
                }`}
                errorMessage="Tagline is error"
              />

              <TextAreaWithLabel
                name="Description"
                value={data.Description}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 text-area-form ${
                  touch.Description && error.Description ? 'is-invalid' : ''
                }`}
                errorMessage="Description is error"
              />

              <InputWithLabel
                name="First Brewed"
                value={data.FirstBrewed}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.FirstBrewed && error.FirstBrewed ? 'is-invalid' : ''
                }`}
                errorMessage="First Brewed is error"
              />

              <InputWithLabel
                name="Brewers Tips"
                value={data.BrewersTips}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.BrewersTips && error.BrewersTips ? 'is-invalid' : ''
                }`}
                errorMessage="Brewers Tips is error"
              />

              <InputWithLabel
                name="Attenuation Level"
                type="number"
                value={data.AttenuationLevel}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.AttenuationLevel && error.AttenuationLevel
                    ? 'is-invalid'
                    : ''
                }`}
                errorMessage="Attenuation Level is error"
              />

              <InputWithLabel
                name="Contributed By"
                value={data.ContributedBy}
                change={this.handleChange}
                onBlur={this.handleOnblur}
                className={`form-control p-4 ${
                  touch.ContributedBy && error.ContributedBy ? 'is-invalid' : ''
                }`}
                errorMessage="Contributed By Tips is error"
              />

              <button
                type="submit"
                className="btn btn-primary btn-form mt-4 p-2"
                disabled={isError}
              >
                ADD NEW
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
