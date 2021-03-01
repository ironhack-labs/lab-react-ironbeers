import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level : '',
            contributed_by : '',
        }
    }
    
    handleChange = event => {
            let name = event.target.name;
            let value = event.target.value;
            this.setState((state,props) => ({
                [name]: value
            }))
      }

      handleNumber = event => {
        let value = event.target.value;
        this.setState((state,props) => ({
            attenuation_level: value
        }))
  }

  handleSubmit = (event) => {
      event.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level : this.state.attenuation_level,
        contributed_by :  this.state.contributed_by,
    }).then((response) => {
          this.setState((state,props) => ({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level : '',
            contributed_by : '',
          }))
    })
  }

    render(){
        return(
            <div className="addBeer">
               <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
         <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
             <label htmlFor="first_brewed">First Brewed: </label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />
             <label htmlFor="brewers_tips">Brewing Tips: </label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />
                <label htmlFor="attenuation_level ">Attenuation Level: </label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level "
          value={this.state.attenuation_level}
          onChange={this.handleNumber}
        />
                <label htmlFor="contributed_by ">Contributed By: </label>
        <input
          type="text"
          id="contributed_by "
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />
         <button type="submit">Create this Beer</button>
        </form>
           </div>
        )
    }

}

export default NewBeer