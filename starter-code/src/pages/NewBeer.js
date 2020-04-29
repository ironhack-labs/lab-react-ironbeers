import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

class NewBeer extends Component {
  
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewerTips: '',
    attenuationLevel: undefined,
    contributedBy: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  sendData = () => {
    const {name, tagline, description, firstBrewed, brewerTips, attenuationLevel, contributedBy} = this.state;
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, firstBrewed, brewerTips, attenuationLevel, contributedBy}) 
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <label>
            Name:<br></br>
            <input type="text" name="name" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Tagline:<br></br>
            <input type="text" name="tagline" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Description:<br></br>
            <input type="text" name="description" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            First Brewed:<br></br>
            <input type="text" name="firstBrewed" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Brewer Tips:<br></br>
            <input type="text" name="brewerTips" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Attenuation Level:<br></br>
            <input type="number" name="attenuationLevel" onChange={this.handleChange}/>
          </label><br></br>
          <label>
            Contributed By:<br></br>
            <input type="text" name="contributedBy" onChange={this.handleChange}/><br></br>
          </label><br></br>
          <button onClick={this.sendData}>ADD NEW</button>
        </div>
      </div>
    );
  }
}

export default NewBeer;