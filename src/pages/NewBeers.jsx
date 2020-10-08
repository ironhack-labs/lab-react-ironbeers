import React from 'react';
import apiHandler from '../apiHandler';
import '../styles/Beers.css';
import NavMain from '../components/NavMain';

class NewBeers extends React.Component {
  state = {};

  handleChange = (event) => {
    // console.dir(event.target.name);
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {};
  render() {
    console.log(this.state.friends);
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Add a friend</h2>
        {/* <p>PS: You already have {this.props.friends.length} friends !</p> */}

        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          // onChange={this.handleUsername}
          onChange={this.handleChange}
          value={this.state.username}
          id="username"
          autoComplete="off"
          className="input"
          type="text"
          name="username"
        />

        <label className="label" htmlFor="profileImage">
          Profile image
        </label>
        <input
          id="profileImage"
          autoComplete="off"
          className="input"
          type="text"
          name="profileImage"
          value={this.state.profileImage}
          onChange={this.handleChange}
          // onChange={this.handleProfileImage}
        />

        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          id="age"
          autoComplete="off"
          className="input"
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          // onChange={this.handleAge}
        />

        <button className="button">Submit</button>
      </form>
    );
  }
}

export default NewBeers;
