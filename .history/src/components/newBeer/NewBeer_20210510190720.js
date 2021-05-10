import React from 'react';
import BeerServices from '../../services/beers.services';
import Header from '../header/Header';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: '',
        contributed_by: '',
      },
    };
    this.beersService = new BeerServices();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.beersService
      .create(this.state.fields)
      .then(() => {
        this.state = {
          fields: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewer_tips: '',
            attenuation_level: '',
            contributed_by: '',
          },
        };
      })
      .catch((error) => console.error(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              placeholder="Title..."
              type="text"
              name="name"
              value={fields.name}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline: </label>
            <input
              placeholder="Tagline..."
              type="text"
              name="tagline"
              value={fields.tagline}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="first_brewed">First brewed: </label>
            <input
              placeholder="First brewed..."
              type="text"
              name="first_brewed"
              value={fields.first_brewed}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="brewer_tips">Brewed tips: </label>
            <input
              placeholder="First brewed..."
              type="number"
              name="first_brewed"
              value={fields.first_brewed}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
