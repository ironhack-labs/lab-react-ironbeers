import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class NewBeer extends Component {
  state={
    beer:{}
  }

  handleInputs = (e) => {
    const { beer } = this.state;
    const key = e.target.name;
    beer[key] = e.target.value;
    this.setState({ beer });
  };
 
  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', this.state.beer)
      .then(({ beer }) => {
        console.log(beer);  
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
      this.props.history.push('/beers')
    }

  render() {
    return (
      <div>
        <div className="menu bg-primary">
          <Link className="text-light" to="/"><FontAwesomeIcon icon={faHome} size="2x"/></Link>
        </div>
        <div className="row form-box">
          <div className="col-md-6 col-12 offset-md-3">
            <h1>Create new beer</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input onChange={this.handleInputs} name="name" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Tagline</label>
                <input onChange={this.handleInputs} name="tagline" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input onChange={this.handleInputs} type="text" name="description" className="form-control"/>
              </div>
              <div className="form-group">
                <label>First Brewed</label>
                <input onChange={this.handleInputs} name="first_brewed" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Brewed Tips</label>
                <input onChange={this.handleInputs} name="brewers_tips" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Attenuation Level</label>
                <input onChange={this.handleInputs} name="attenuation_level" type="number" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Contributed by</label>
                <input onChange={this.handleInputs} name="contributed_by" type="text" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-primary btn-rounded">Add New</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default  NewBeer;