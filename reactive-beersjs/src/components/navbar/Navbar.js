import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
        query: '',
    };
  }

  handleChangeQuery = (event) => {  
    this.setState({
      query:event.target.value
    })
  }

  render(){

      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome to Beer.js</li>
            <li><Link to='/' style={{ textDecoration: 'none' }}> Beers </Link></li>
            <li><Link to='/randombeer' style={{ textDecoration: 'none' }}>Random Beer</Link></li>
            <li><Link to='/makebeer'style={{ textDecoration: 'none' }}> Add a new Beer! </Link></li>
            <li>
                <input type="text" name="query" value={this.state.query} onChange={e => this.handleChangeQuery(e)} />
                <Link to={`/search/${this.state.query}`} style={{ textDecoration: 'none' }}> Search! </Link>
            </li>
          </ul>
        </nav>
      )
  }
}

export default Navbar;