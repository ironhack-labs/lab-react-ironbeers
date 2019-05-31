import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
  state = {
    isOpen: false
  };

  render () {
    const menuClass = `collapse navbar-collapse ${this.state.isOpen ? " show" : ""}`;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
          <button 
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={this.state.isOpen} >
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className={menuClass} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/all">All beers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/random">Random Beer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/new">Add a Bear</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )}
}

export default Navbar