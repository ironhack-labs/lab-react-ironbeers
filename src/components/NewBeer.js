import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NewBeer extends Component {
    render() {
        return (
          <div>
            <header>
              <Link to={'/'}>Back to Home</Link>
            </header>
          </div>
        );
    }
}

export default NewBeer;