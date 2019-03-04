import React from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';

class AddNewBeer extends React.Component {

  state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
  }

  changeHandler = (e) => {

    let field = e.target.name
    let value = e.target.value

    this.setState({
     [field]: value
    })
  }

  submitHandler = (e) => {

    axios.post('https://ironbeer-api.herokuapp.com/beers/new', {
                name:this.state.name,
                tagline:this.state.tagline,
                description:this.state.description,
                first_brewed:this.state.first_brewed,
                brewers_tips:this.state.brewers_tips,
                attenuation_level:this.state.attenuation_level,
                contributed_by:this.state.contributed_by
        }).then(response => {

    console.log("just posted" + response)

     }).catch(err => console.log(err))

  }


    render() {
      return ( <div>
      
      <Link to="/">Home</Link><br /><br />
      <form onSubmit={(e) => this.submitHandler(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="first_brewed">First brewed</label>
        <input type="text" name="first_brewed" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="brewers_tips">Brewers tips</label>
        <input type="text" name="brewers_tips" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <label htmlFor="contributed_by">Contributed by</label>
        <input type="text" name="contributed_by" onChange={(e) => this.changeHandler(e)}></input><br /><br />

        <button type="submit">Add</button>
      </form>
      </div>
      )
    }
}

export default AddNewBeer
