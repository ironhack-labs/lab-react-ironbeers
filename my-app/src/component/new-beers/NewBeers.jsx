import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
import homeBeer from '../../img/homeBeer.png'


class NewBeers extends React.Component {
  constructor() {
    super(); 
    this.state = {
      name:'',
      tagline:'',
      description:'',
      first_brewed:'',
      brewers_tips:'',
      attenuation_level:'',
      contributed_by:'',
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
         <div>
            <Link to='/' component={Home}>
              <img src={homeBeer} alt='home-link' />
            </Link>
         </div>
        <form>
          <label>Name</label>
          <input type='text' name='name' value='' />
          <label>Tagline</label>
          <input type='text' name='tagline' value='' />
          <label>Description</label>
          <input type='text' name='description' value='' />
          <label>First Brewed</label>
          <input type='text' name='first_brewed' value='' />
          <label>Brewers Tips</label>
          <input type='text' name='brewers_tips' value='' />
          <label>Attenuation Level</label>
          <input type='number' name='attenuation_level' value='' />
          <label>Contributed By</label>
          <input type='text' name='contributed_by' value='' />
        </form>
      </div>
    )
  }
  }

export default NewBeers;