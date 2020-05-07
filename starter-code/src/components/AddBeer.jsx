import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddBeer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: '',
      contributed_by: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const key = event.target.name;
    let value = "";
    value = event.target.value;
    this.setState({ [key]: value });
  }
  // const value =
  //   event.target.type === "file" ? event.target.files[0] : event.target.value;

  handleSubmit = (event) => {
    event.preventDefault();
    let { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by } = this.state;
    axios
      .post("http://ih-beers-api.herokuapp.com/beers/new", {
        name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by
      })
      .then(() => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewer_tips: '',
          attenuation_level: '',
          contributed_by: '',
        })
      })
      .catch((error) => console.log(error))
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div className="form">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>


          <div className="form">
            <label>Tagline</label>
            <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />
          </div>

          <div className="form">
            <label>Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>

          <div className="form">
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
          </div>

          <div className="form">
            <label>Brewer Tips</label>
            <input type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={this.handleChange} />
          </div>

          <div className="form">
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
          </div>

          <div className="form">
            <label>Contributed by</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
            <br />
            <input className="submit" type="submit" value="ADD NEW"></input>
          </div>

        </form>
      </div>
    )
  }
}

export default AddBeer;
