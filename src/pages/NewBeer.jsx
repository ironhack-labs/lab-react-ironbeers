import React from 'react';
import Navbar from '../components/Navbar';
class NewBeer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>There's a form here to submit a new beer</h1>
      </div>
    );
  }
}

export default NewBeer;
