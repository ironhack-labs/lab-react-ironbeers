import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

class BeerForm extends Component {

  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      beer: {
        ...this.state.beer,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //const { beer } = this.state

    axios
      .post('https://ih-beer-api.herokuapp.com/new', this.state.beer)
      .then(({ newbeer }) => {
        console.log(newbeer);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      beer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: '',
      }
    })
  }

  render() {
    return (
      <div>
        <Link to="/">
          <Button type="primary">Go back to Home</Button>
        </Link>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form-group">
            <label>
              Beer Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Tag Line:
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Description:
              <TextArea
                type="textarea"
                name="description"
                checked={this.state.description}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              First Brewed:
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Brewer's Tips:
              <input
                type="text"
                name="brewer_tips"
                value={this.state.brewer_tips}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Attenuation Level:
              <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Contributed By:
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </label>
            <br />
            <input type="submit" value="Create New Beer!" className="btn btn-primary" />
          </form>
        </div>
      </div>
    )
  }
}

export default BeerForm;