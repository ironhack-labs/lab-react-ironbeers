import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class NewBeer extends Component {
    render() {
        return (
          <div>
            <header>
              <NavLink to="/">Back HomePage</NavLink>
            </header>
          </div>
        );
    }
}

export default NewBeer
