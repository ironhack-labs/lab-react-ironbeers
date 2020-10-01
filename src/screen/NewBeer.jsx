import React from 'react';
import InputWithLabel from '../components/InputWithLabel';
import NavBar from '../components/Navbar';

export default class DetailBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
    };
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container mb-5 mt-5">
          <div className="col-md-7 mx-auto">
            <InputWithLabel
              name="Name"
              value={this.state.Name}
              change={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
