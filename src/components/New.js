import React, { useState} from 'react';
import axios from 'axios';
import Header from './Header'

function New(props) {
    const [data, setData] = useState({});

    function submitForm(e) {
      e.preventDefault();
  
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
        .then((res) => {
          console.log(res);
        });
    }
  
    function updateForm(e, t) {
      setData({ ...data, [e.target.id]: e.target.value });
    }
    console.log('Data is', data);
  
    return (
      <div>
        <Header/>
        <form onSubmit={submitForm}>
          <label for="name">Name</label>
          <input type="text" id="name" onChange={updateForm}></input>
          <br />
  
          <label for="tagline">Tagline</label>
          <input type="text" id="tagline" onChange={updateForm}></input>
          <br />
  
          <label for="description">Description</label>
          <input type="text" id="description" onChange={updateForm}></input>
          <br />
  
          <label for="first_brewed">First Brewed</label>
          <input type="text" id="first_brewed" onChange={updateForm}></input>
          <br />
  
          <label for="brewer_tips">Brewer Tips</label>
          <input type="text" id="brewer_tips" onChange={updateForm}></input>
          <br />
  
          <label for="attenuation_level">Attenuation Level</label>
  
          <input
            type="number"
            id="attenuation_level"
            onChange={updateForm}
          ></input>
          <br />
  
          <label for="contributed_by">Contributed By</label>
          <input type="text" id="contributed_by" onChange={updateForm}></input>
  
          <button type="submit">Create new beer!</button>
        </form>
      </div>
    );
  }

export default New;