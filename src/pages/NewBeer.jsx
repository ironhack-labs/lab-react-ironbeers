import React, { Component } from 'react';
import Container from '../components/Container';
import FormField from '../components/FormField';
import styled from '@emotion/styled';

import { postBeer } from "../lib/beerApi";

export const Form = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 2em;
  input {
    border-radius: 5em !important;
  }
  button {
    width: 100%;
    margin-top: 1em;
    padding: .5em 1em;
    background-color: #3dc4fc;
    outline: 0;
    border-radius: 5em;
    border: none;
    box-shadow: none;
    font-size: .9em;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    };
  }
  handlePostBeer(){
    postBeer(this.state.newBeer).then(res => {
      console.log("res", res);
      this.clearForm();
    });
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({newBeer: {...this.state.newBeer, [name]: value}});
    //console.log(this.state.newBeer);
  }
  clearForm() {
    this.setState({
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    });
  }
  render() {
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state.newBeer;
    return (
      <Container className="newBeer">
        <Form>
          <FormField label="Name" name="name" type="text" onChange={e => this.handleInput(e)} placeholder="Unicorn Beer" value={name}/>
          <FormField label="Tagline" name="tagline" type="text" onChange={e => this.handleInput(e)} placeholder="Made with love, unicorn tears and rainbow glitter" value={tagline}/>
          <FormField label="Description" name="description" type="textarea" onChange={e => this.handleInput(e)} placeholder="Pony pony unicorn pop pigeon unicorn rainbows were unicorn. Pop puppy pop, kittens puppy pop pony unicorn delight surprise. Pigeon surprise unicorn rainbows delight delight kittens, social pony were unicorn rainbows pegasus." value={description}/>
          <FormField label="First Brewed" name="first_brewed" type="date" onChange={e => this.handleInput(e)} placeholder="" value={first_brewed}/>
          <FormField label="Brewers Tips" name="brewers_tips" type="text" onChange={e => this.handleInput(e)} placeholder="Consume with lots of glitter and sequins" value={brewers_tips}/>
          <FormField label="Attenuation Level" name="attenuation_level" type="number" onChange={e => this.handleInput(e)} placeholder="75" value={attenuation_level}/>
          <FormField label="Contributed By" name="contributed_by" type="text" onChange={e => this.handleInput(e)} placeholder="anæstrada" value={contributed_by}/>
          <button onClick={() => this.handlePostBeer()}>ADD BEER</button>
        </Form>
      </Container>
    );
  }
}
