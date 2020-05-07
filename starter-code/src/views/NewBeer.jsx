import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

class NewBeer extends React.Component {

  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  handleChange = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.value)
    const {id,value} = e.target
    this.setState({[id]:value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(response=>console.log(response))
      .catch(err=>console.log(err))
  }

  render(){
    return (
      <div>
        <NavBar/>
        <form 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Name</label><br></br>
          <input type="text" id="name"/><br></br>
  
          <label htmlFor="tagline">Tagline</label><br></br>
          <input type="text" id="tagline"/><br></br>
  
          <label htmlFor="description">Description</label><br></br>
          <input type="text" id="description"/><br></br>
  
          <label htmlFor="first_brewed">First brewed</label><br></br>
          <input type="text" id="first_brewed"/><br></br>
  
          <label htmlFor="brewers_tips">Brewer tips</label><br></br>
          <input type="text" id="brewers_tips"/><br></br>
  
          <label htmlFor="attenuation_level">Attenuation level</label><br></br>
          <input type="number" id="attenuation_level" min='0'/><br></br>
  
          <label htmlFor="contributed_by">Contributed by</label><br></br>
          <input type="text" id="contributed_by"/><br></br>

          <button >Let's go!</button>
        </form>
      </div>
    )
  }
}

export default NewBeer
