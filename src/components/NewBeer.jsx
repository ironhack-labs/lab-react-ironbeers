import React, { Component } from 'react';

export default class NewBeer extends Component {
    
    state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by:''
    }

    handleInput = (e) => {
      let {name, value} = e.target
      if (e.target.type === 'checkbox') {
        value = e.target.checked
      }
      this.setState({[name]: value})
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(this.state)
        })
        .then((result) => {
        console.log(result);
    
        })
        .catch((e) => console.log(e));
        this.props.history.push('/')
    }

   render() {
  return (  
    <div>
      { console.log(this.props)}
       <form  onSubmit={(e) => this.handleSubmit(e)}>
       <h3>Name</h3>
       <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}/>
       <h3>Tagline</h3>
       <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleInput(e)}/>
       <h3>Description</h3>
       <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleInput(e)}/>
       <h3>First brewed</h3>
       <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleInput(e)}/>
       <h3>Attenuation Level</h3>
       <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleInput(e)}/>
       <h3>Brewers tips</h3>
       <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleInput(e)}/>
       <h3>Contributed by</h3>
       <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleInput(e)}/>
       <input type="submit" value="Submit" disabled={this.state.name === ""}></input>
       </form>
    </div>
  )
}
}




