import React from 'react';
import axios from 'axios';
import Input from './Input';

class NewBeer extends React.Component {
  state = {
    data: {
      name: ''

    },
    response: {
      error: false,
      correct: false,
    }
   
  };

  handleChange = event =>{
    this.setState({ name: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newBeer = {
      name: this.state.name
    }

    axios
      .post('https:sample-endpoint.com/user', {
        newBeer
      })
      .then(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label>Name
            <input className="form-control" type="text" name="name" onChange= {this.handleChange}/>
            </label>
          </div>
          
          <Input className="form-control" placeholder="0" name="alcohol" label="Insert Alcohol Degrees"/>
          
          <button type="submit">Send</button>
        </form>

        {/* <p>name - must be type text</p>
      <p>tagline - must be type text</p>
      <p>description - must be type text</p>
      <p>first_brewed - must be type text</p>
      <p>brewers_tips - must be type text</p>
      <p>attenuation_level - must be type number !!!</p>
      <p>contributed_by - must be type text</p> */}
      </div>
    );
  }
}

export default NewBeer;
