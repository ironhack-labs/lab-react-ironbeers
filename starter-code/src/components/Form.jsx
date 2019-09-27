import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewerTips: "",
    attenuationLevel: 0,
    contributedBy: ""
  };

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  formHandle = event => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      firstBrewed,
      brewerTips,
      attenuationLevel,
      contributedBy
    } = this.state;
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        firstBrewed,
        brewerTips,
        attenuationLevel,
        contributedBy
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/beers");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form method='POST' onSubmit={this.formHandle}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Add the name of your new IronBeer'
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <br />
        <label htmlFor='tagline'>Tagline</label>
        <input
          type='text'
          name='tagline'
          id='tagline'
          placeholder='Add the tagline of your new IronBeer'
          value={this.state.tagline}
          onChange={this.changeHandler}
        />
        <br />
        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='10'
          placeholder='Enter the description here'
          value={this.state.description}
          onChange={this.changeHandler}
        ></textarea>
        <br />
        <label htmlFor='firstBrewed'>First Brewed?</label>
        <input
          type='text'
          name='firstBrewed'
          id='firstBrewed'
          placeholder='When was it first brewed?'
          value={this.state.firstBrewed}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label htmlFor='brewerTips'> Brewer Tips</label>
        <input
          type='text'
          name='brewerTips'
          id='brewerTips'
          placeholder='Some tips for your new IronBeer'
          value={this.state.brewerTips}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label htmlFor='attenuationLevel'>Attenuation Level</label>
        <input
          type='number'
          name='attenuationLevel'
          id='attenuationLevel'
          placeholder='Number Input please!'
          value={this.state.attenuationLevel}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label htmlFor='contributedBy'>Who are you?</label>
        <input
          type='text'
          name='contributedBy'
          id='contributedBy'
          placeholder='Who? Who? Who? Who?'
          value={this.state.contributedBy}
          onChange={this.changeHandler}
        />
        <br />
        <button type='submit'>Add your beer</button>
      </form>
    );
  }
}
