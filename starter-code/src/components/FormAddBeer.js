import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class FormAddBeer extends Component {

  state = {
    name: '',
    contributed_by: '',
    attenuation_level: '',
    first_brewed: '',
    brewers_tips: '',
    description: '',
    tagline: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleFormSubmit = () => {
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(res => {
        this.props.history.push("/beers");
      })
      .catch(err => {
        this.props.history.push("/beers");
      })
  };

  render() {
    const {name, tagline, description, brewers_tips, first_brewed, attenuation_level, contributed_by} = this.state;
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input onChange={this.handleInputChange} type="text" name={'name'} value={name}/>
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input onChange={this.handleInputChange} type="text" name={'tagline'} value={tagline}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea onChange={this.handleInputChange} name={'description'} value={description}/>
        </div>
        <div className="form-group">
          <label>First brewed</label>
          <input onChange={this.handleInputChange} type="text" name={'first_brewed'} value={first_brewed}/>
        </div>
        <div className="form-group">
          <label>Brewer tips</label>
          <input onChange={this.handleInputChange} type="text" name={'brewers_tips'} value={brewers_tips}/>
        </div>
        <div className="form-group">
          <label>Attenuation level</label>
          <input onChange={this.handleInputChange} type="text" name={'attenuation_level'} value={attenuation_level}/>
        </div>
        <div className="form-group">
          <label>Contributed by</label>
          <input onChange={this.handleInputChange} type="text" name={'contributed_by'} value={contributed_by}/>
        </div>
        <button onClick={this.handleFormSubmit}>Add</button>
      </div>
    );
  }
}

export default withRouter(FormAddBeer);