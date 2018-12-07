import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div className="home">
      
        <ul>
          <Link to="/beer" style={{ textDecoration: 'none' }}>Beers</Link>
        </ul>
      
      
      </div>
    );
  }
}

export default Home;