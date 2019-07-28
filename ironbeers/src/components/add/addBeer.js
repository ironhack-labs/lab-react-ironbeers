import React from 'react';
import axios from 'axios';

export default class addBeer extends React.Component {
  constructor(props){
      super(props)
  }

  addingBeer = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const aBeer = {
      name: this.state.name
    };

    axios.post(` https://sample-api-ih.herokuapp.com/new`, { aBeer })
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Beer Name:
            <input type="text" name="name" onChange={this.addingBeer} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}