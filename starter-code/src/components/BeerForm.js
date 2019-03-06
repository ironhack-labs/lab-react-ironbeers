import React, { Component } from 'react'
import Input from './Input';
import TextArea from './TextArea';

class BeerForm extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    beer: [],
    error: false
  }

  render = () => {
    return (
     <form className="box">
      <Input  title="Namer" name="name"/>
      <br/>
      <Input title="Tagline" name="tagline"/>
      <br/>
      <Input title="First Brewed" name="first_brewed"/>
      <br/>
      <TextArea title="Description" name="description"/>
      <br/>
      <TextArea title="Brewers Tips" name="brewers_tips"/>
      <br/>
      <Input title="Attenuation Level" name="attenuation_level"/>
      <br/>
      <Input title="Contributed by" name="contributed_by"/>
      <br/>
      <div>
        <br/>
        <button type="submit" class="button is-primary is-outlined is-fullwidth">Submit</button>
      </div>
     </form>
    )
  }
  
}

export default BeerForm 


