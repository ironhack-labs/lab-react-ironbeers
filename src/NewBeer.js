import axios from 'axios';
import React from 'react';
import {useState} from 'react';


export default function NewBeer() {
const[newBeer, setNewBeer] = useState({
  name: '',
  tagline: '',
  description:'',
  first_brewed:'',
  brewers_tips:'',
  attenuation_level:0,
  contributed_by:''
});



const handleSubmit = event => {
  event.preventDefault();

  axios({
    method: 'post',
    url: 'https://ih-beers-api2.herokuapp.com/beers/new',
    data: newBeer
  })
  .then(response => {
    console.log(response)
  })
}

console.log(newBeer)
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' name='name' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})} />
      <br />
      <label>Tagline</label>
      <input type='text' name='tagline' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})}/>
      <br />
      <label>Description</label>
      <input type='text' name='description' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})}/>
      <br />
      <label>First Brewed</label>
      <input type='text' name='first_brewed' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})} />
      <br />
      <label>Brewer's Tips</label>
      <input type='text' name='brewers_tips' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})} />
      <br />
      <label>Attenuation Level</label>
      <input type='number' name='attenuation_level' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})} />
      <br />
      <label>Contributed by</label>
      <input type='text' name='contributed_by' onChange={(e) => setNewBeer({...newBeer, [e.target.name]: e.target.value})} />
      <br />
      <button type='submit'>Add Beer</button>

    </form>
    </div>
  )
}

