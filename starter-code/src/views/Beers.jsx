import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import BeerShowcase from '../components/BeerShowcase'

class Beers extends React.Component {

  state = {
    beers: null,
    searchResult: ''
  }
  
  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response=>{
      this.setState({beers: response.data})
    })
    .catch(err=>console.log(err))
  }

  handleChange = (e) => {
    const query = e.target.value
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then(response=>{
      this.setState({beers: response.data})
    })
    .catch(err=>console.log(err))
  }
  
  render(){
    if(!this.state.beers) return null
    return (
      <div>
        <NavBar/>
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="search" 
          id="beer-filter" 
          placeholder='Have a beer in mind...?'
        />
        {this.state.beers.map((element, index)=>(
          <BeerShowcase
            key={index}
            id={element._id}
            image={element.image_url}
            name={element.name}
            tagline={element.tagline}
            contributed_by={element.contributed_by}
          /> 
        ))
        }
      </div>
    )
  }
}

export default Beers
