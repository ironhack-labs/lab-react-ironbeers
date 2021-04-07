import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
  state = {
      menuOpen: false
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
   return (
    <div>
      <Menu right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <NavLink to="/" activeClassName="selected" onClick={() => this.closeMenu()}>Home</NavLink>
        <NavLink to="/beers" activeClassName="selected" onClick={() => this.closeMenu()}>Beers</NavLink>
        <NavLink to="/random-beer" activeClassName="selected" onClick={() => this.closeMenu()}>Random</NavLink>
        <NavLink to="/new-beer" activeClassName="selected" onClick={() => this.closeMenu()}>Add a beer</NavLink>
      </Menu>
    </div>
  )
  }
}

export default Navbar
