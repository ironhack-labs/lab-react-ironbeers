import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NewBeer extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
        return (
          <div className="NewBeer">
            <div><Link to='/'>Home</Link></div>
            NewBeer
          </div>
        )
    }
}

export default NewBeer;