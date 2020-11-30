import React, {useState} from 'react';
import './NewBeer.css';
import Nav from './Nav';
import axios from 'axios';

let beerBlankForm = {
  name:'',
  tagline:'',
  description:'',
  first_brewed:'',
  brewers_tips:'',
  attenuation_level: 0,
  contributed_by:''
}

function NewBeer() {
  const [beerForm, setValue] = useState(beerBlankForm)

  const handleChange = (event) => {

    setValue({ ...beerForm, 
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let beerFormCopy = beerForm;
    beerFormCopy.attenuation_level = parseInt(beerFormCopy.attenuation_level)
    setValue(beerFormCopy)
    
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerForm)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  }

  return (
    <div className="NewBeer">
      <Nav />
      <form onSubmit={handleSubmit} method='post' className='newBeerForm'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input onChange={handleChange} id='name' type='text' name='name'></input>
        </div>
        <div>
          <label htmlFor='tagline'>Tagline:</label>
          <input onChange={handleChange} id='tagline' type='text' name='tagline'></input>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea onChange={handleChange} cols="35" rows="5" id='description' type='text' name='description'></textarea>
        </div>
        <div>
          <label htmlFor='first_brewed'>First Brewed:</label>
          <input onChange={handleChange} id='first_brewed' type='text' name='first_brewed'></input>
        </div>
        <div>
          <label htmlFor='brewers_tips'>Brewers Tips:</label>
          <input onChange={handleChange} id='brewers_tips' type='text' name='brewers_tips'></input>
        </div>
        <div>
          <label htmlFor='attenuation_level'>Attenuation Level:</label>
          <input onChange={handleChange} id='attenuation_level' type='number' name='attenuation_level'></input>
        </div>
        <div>
          <label htmlFor='contributed_by'>Contributed by:</label>
          <input onChange={handleChange} id='contributed_by' type='text' name='contributed_by'></input>
        </div>
        <button className='submitNewBeer' type='submit'>ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;